class RandomNumberService {
    static newNumber () {
        const number = Math.floor(Math.random() * (10 - 0 + 1));
        return number;
    }
}

export default RandomNumberService;