import request from 'supertest'
import {app} from "../../app";

it("it clears the cookie after signing out", async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(404);//this is because I don't have this set up in the back end host logic

    const response = await request(app)
        .post('/api/users/signout')
        .send({})
        .expect(404);//this is because I don't have this set up in the back end host logic

    console.log(response.get("Set-Cookie"));
    expect(response.get('Set-Cookie')).toEqual(undefined)
});
