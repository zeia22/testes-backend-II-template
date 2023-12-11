import { HashManagerMock } from './../HashManagerMock';
import { TokenManagerMock } from './../TokenManagerMock';
import { IdGeneratorMock } from './../IdGeneratorMock';
import { UserDatabaseMock } from './../UserDatabaseMock';
import { UserBusiness } from './../../../src/business/UserBusiness';
import { LoginInputDTO } from '../../../src/dtos/user/login.dto';


describe("Testing loguin in UserBusiness", ()=>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("deve retornar token ao se logar corretamente",async() => {
        const input: LoginInputDTO = {
            email:"fulano@email.com",
            password:"fulano123"
        }
        const output = await userBusiness.login(input)

        expect(output.message).toBe("Login realizado com sucesso")
        expect(output.token).toBe("token-mock-fulano")
    })

})