//import { prismaMock } from '../database-simulator/client-singleton'

function returnOne()
{
    return 1
}
test('Probar que 1 es igual a uno', () => {
    expect(1).toBe(returnOne())
})