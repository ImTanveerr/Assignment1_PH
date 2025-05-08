{

    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === undefined || toUpper === true) {
            //console.log(input.toUpperCase());
            return input.toUpperCase();

        } else {
            // console.log(input.toLowerCase());
            return input.toLowerCase();
        }
    }
    formatString("Hello");          // Output: "HELLO"
    formatString("Hello", true);   // Output: "HELLO"
    formatString("HELLO MR", false);   // Output: "hello mr"
    formatString("Hello World", undefined);  // Output: "HELLO WORLD"




    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

        // console.log(items.filter(item => item.rating >= 4));
        return items.filter(item => item.rating >= 4);
    }


    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 1.0 },
    ];

    filterByRating(books); // Output: [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5 } ]








    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let result: T[] = [];
        for (const array of arrays) {
            result = result.concat(array);
        }
        //  console.log(result);
        return result;
    }

    concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
    concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]


    class Vehicle {
        private make: string;
        private year: number;
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
        getInfo(): string {
            //  console.log(`Make: ${this.make}, Year: ${this.year}`);
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        getModel(): string {
            //  console.log(`Model: ${this.model}`);
            return `Model: ${this.model}`;
        }

    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    myCar.getModel();  // Output: "Model: Corolla"



    function processValue(value: string | number): number {
        if (typeof value === "string") {
            // console.log(value.length);
            return value.length;
        } else {
            // console.log(value * 2);
            return value * 2;
        }
    }

    processValue("hello"); // Output: 5
    processValue(10);      // Output: 20





    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        let mostExpensive = products[0];
        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        //console.log(mostExpensive);
        return mostExpensive;
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products);
    // Output: { name: "Bag", price: 50 }


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                //console.log("Weekend");
                return "Weekend";
            default:
                // console.log("Weekday");
                return "Weekday";
        }
    }

    getDayType(Day.Monday);   // Output: "Weekday"
    getDayType(Day.Saturday);   // Output: "Weekend"





    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(n * n);
                }
            }, 1000);
        });
    }
    squareAsync(2).then(console.log);        // Output after 1s: 4

    squareAsync(4).then(console.log);        // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed







}