import { greet } from "./greet";

describe('greet', () => {
    it('should return name', () => {
        expect(greet('Angular')).toContain("Angular");
    })
})