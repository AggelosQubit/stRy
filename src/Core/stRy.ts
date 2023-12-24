import * as fs from 'fs' 


export function GenerateComic(fullStRyBoard: ComicBook){
    console.log("fullStRyBoard.Comic.length : ",fullStRyBoard.Comic.length);
    if(fullStRyBoard.Comic.length===0) return null;

    fs.mkdirSync(`\Assets\BookGenerated\+${fullStRyBoard.Title}`);
    for(let i=0;i<fullStRyBoard.Comic.length;i++){
        fs.mkdirSync(`\Assets\BookGenerated\+${fullStRyBoard.Title}+\P+${i}`);
        for(let j=0;j<fullStRyBoard.Comic[i].storyboardPages.length;j++){
            let data = {
                "prompt": fullStRyBoard.Comic[i].storyboardPages[j].Description,
                "steps": 100
            };
            fetch('https://api.wizmodel.com/sdapi/v1/txt2img',{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI3MjM3NzgsInVzZXJfaWQiOiI2NTdkODBjMmNmZDU1MTAyMDY1NDQxYTgifQ.SOmDy5UcIqr9rHkJTgc8rwqHl2yMmKBFAVbeBJE8YHs"
                },
                body : JSON.stringify(data)
            }).then(res => res.blob())
            .then(console.log)
        }
    }
}
