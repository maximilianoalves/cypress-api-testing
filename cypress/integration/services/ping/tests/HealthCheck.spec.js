import * as GetPing from '../requests/getPing.request';

describe('Get Ping', () => {
    it('Verificar se API está online - @healthcheck', () => {
        GetPing.ping().should((response) => {
            expect(response.status).to.eq(201)
        })
    })
})