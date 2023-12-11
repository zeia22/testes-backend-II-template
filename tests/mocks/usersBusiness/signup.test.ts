import { HashManagerMock } from './../HashManagerMock';
import { TokenManagerMock } from './../TokenManagerMock';
import { IdGeneratorMock } from './../IdGeneratorMock';
import { UserDatabaseMock } from './../UserDatabaseMock';
import { UserBusiness } from './../../../src/business/UserBusiness';
import { LoginInputDTO } from '../../../src/dtos/user/login.dto';
import { SignupInputDTO } from '../../../src/dtos/user/signup.dto';


describe("Testing signup in UserBusiness", ()=>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("deve retornar token ao se cadastrar corretamente",async() => {
        const input: SignupInputDTO = {
            name: "Ciclana",
            email: "ciclana@email.com",
            password:"ciclana00"
        }
        const output = await userBusiness.signup(input)

        expect(output.message).toBe("Cadastro realizado com sucesso")
        expect(output.token).toBe("token-mock")
    })

})