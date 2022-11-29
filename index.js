const template = '##h2 title \n Some text here! [link Text](https://google.com "primary") without to see how <br/> it works <br/> out inthe parser ya know. \n [Other link](https://github.com/ "secondary") And what about some more **bold** *italic* text and using ###h3 Image \n ![Placehold.it 200x200 image](https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=1060)';

const output = document.createElement('div');
output.classList.add('output');
output.innerHTML = `
<h1>Entry string</h1>
${template}
${parseTemplate(template)}
`
document.body.appendChild(output);
const code = document.createElement('code');
code.classList.add('example');
code.innerText = parseTemplate(template);
document.body.appendChild(code);

function parseTemplate(md) {
	
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" class="$4">$1</a>');
  console.log(md)
  
  //font styles
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  
  return md;
}
