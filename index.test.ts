import { add } from "./index"
import { GenerateComic } from "./src/Core/stRy"
import * as fs from 'fs' 


describe("Generate Comics Component",()=>{
    test("Generate Comic", ()=>{
        expect(add(1,2)).toBe(3)
    })
    test("Generate Comic", ()=>{
        let stringBook = fs.readFileSync('./Assets/BookToGenerate/ComicBookTest.json').toString();
        let book : ComicBook = JSON.parse(stringBook);
        
        console.log( book.hasOwnProperty("Comic"))
        expect(GenerateComic(book)).toBe(3)
    })
})