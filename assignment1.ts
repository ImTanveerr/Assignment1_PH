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
        console.log(result);
        return result;
    }
    
    concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
    concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]



















}