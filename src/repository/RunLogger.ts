
// 1. e2—e4 e7—e5
// 2. Сf1—c4 Кb8—c6
// 3. Фd1—h5 Кg8—f6
// 4. Фh5xf7#

class RunLogger {
    #log: string[] = [];

    constuctor() {
    }

    makemove(move: string) {
        this.#log.push(move);
    }

    undomove() {
        if(this.getLogLength() === 0) {
            return
        }
        this.#log.pop();
    }

    getLogLength() {
        return this.#log.length;
    }
}