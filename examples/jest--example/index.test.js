const { add, subtract } = require('./index.js');

describe('Mathematical operations', () => {
    beforeEach(() => {
        console.log('Körs innan varje test');
    });

    //Strängen nedan förklarar vad testet ska göra och det förväntade resultatet
    //Funktionen efter är det som kör testet
    it('should return the sum of two numbers', () => {
        // Arrange
        const expected = 10;

        // Act
        const actual = add(5, 5);

        // Assert
        expect(actual).toBe(expected);
    });

    it('should return the difference of two numbers positive', () => {
        // Arrange
        const expected = 5;

        // Act
        const actual = subtract(10, 5);

        // Assert
        expect(actual).toBe(expected);
    });

    it('should return the difference of two numbers negative', () => {
        // Arrange
        const expected = -5;

        // Act
        const actual = subtract(5, 10);

        // Assert
        expect(actual).toBe(expected);
    });
});