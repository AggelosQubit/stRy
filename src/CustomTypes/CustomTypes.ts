type Vignette = {
    Description: string
}

type Page = {
    storyboardPages: Vignette[]
}

type ComicBook = {
    Title : string
    Comic : Page[]
}

type ResponseWizmodel = {
    images : string[]
}