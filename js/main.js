const colourStyles = [
    {
        colour: "Black",
        hex: "#232323",
        styles: "background-color: #232323; color: white; border: #232323 1px solid;"
    },
    {
        colour: "White",
        hex: "#fffe",
        styles: "background-color: #ffffffee; border: 1px solid;"
    },
    {
        colour: "Aqua",
        hex: "#14bdbd",
        styles: "background-color: #14bdbd; border: 1px solid;"
    },
    {
        colour: "Teal",
        hex: "#0b925e",
        styles: "background-color: #0b925e; border: 1px solid;"
    },
    {
        colour: "Grey",
        hex: "#201F2E",
        styles: "background-color: #201F2E; color: #fffe; border: #201F2E 1px solid;"
    }
]

const fonts = [
    {
    font: "pt-sans",
    fontFamily: 'font-family: "PT Sans", sans-serif;'
    },
     {
         font: "roboto",
         fontFamily: 'font-family: Roboto, sans-serif;'
      },
      {
          font: "helvetica",
        fontFamily: "font-family: Helvetica, sans-serif;"
    }];

const fontSizes = {
    h1: {
        heading: "h1 - herosection heading",
        fullSize: "55px",
        tabletSize: "50px",
        phoneSize: "38px"
    },
    h2: {
        heading: "h2 - herosection subheading",
        fullSize: "45px",
        tabletSize: "35px",
        phoneSize: "24px"
    },
    h3: {
        heading: "h3 - second subheading",
        fullSize: "30px",
        tabletSize: "28px",
        phoneSize: "20px"
    },
    p: {
        heading: "p - herosection paragraph",
        fullSize: "22px",
        tabletSize: "18px",
        phoneSize: "16px"
    }  
}

//logic for inserting colours into index.html
let fullHTMLtext = "";
colourStyles.forEach(colourObject => {
    const card = `<div class="color-card" id="${colourObject.colour}" style="${colourObject.styles}">${colourObject.colour}<br>${colourObject.hex}</div>`;
    fullHTMLtext += card;
});

document.getElementById("colours-card-container").innerHTML = fullHTMLtext

//logic for inserting fonts into index.html
fullHTMLtext = "";
fonts.forEach(fontObject => {
    const card = `<div class='font-card' id="${fontObject.font}" style="${fontObject.fontFamily}"><h3><u>${fontObject.font}</u></h3><p>STANDARD: The monkey crossed the road.</p><strong><p>BOLD: The monkey crossed the road.</p></strong><em><p>ITALICS: The monkey crossed the road.</p></em></div>`;
    fullHTMLtext += card; 
});

document.getElementById('fonts-card-container').innerHTML = fullHTMLtext;

//logic for inserting font styles into index.html
fullHTMLtext = "";
for (const [key, value] of Object.entries(fontSizes)) {
    const card = `<div class='font-size-card'><h3 class="${key}">${value.heading}</h3><p>Font-size: ${value.fullSize}</p><p>At max screen of 960px: ${value.tabletSize}</p><p>At max screen of 768px: ${value.phoneSize}</p></div>`;
    fullHTMLtext+= card;
}

document.getElementById('font-size-container').innerHTML = fullHTMLtext;
