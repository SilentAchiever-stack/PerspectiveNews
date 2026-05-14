


const FooterFunc = () =>{
    // let footer= document.getElementById('footer')

        let footTitle= document.getElementById('title')

            let FootContnet= document.getElementById('content')

    let Content= `
    We do not own the copyright to any of the news articles, images, videos, or content
    featured on this platform. All content is sourced from external sources and is used for informational
    purposes only. For copyright inquiries, please contact the original source.
    `
    let Title = `
    Disclaimer:
    `
    FootContnet.append(Content)
    footTitle.append(Title)
}

FooterFunc();