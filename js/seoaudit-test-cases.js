
console.log('%c' + '---------------------------------- SEO Audit Test Cases (Start) ----------------------------------', 'background: #222; color: #fc3;font-weight:bold;');

console.log('%c' + '-------- Title Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('title:empty').each(function(i) {
    console.warn('Empty text found on Title ('+(i+1)+') element: ', this);
});

console.info('Total of empty Titles found: ', $('title:empty').length); 
console.log('%c' + '-------- Title Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H1 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h1:empty').each(function(i) {
    console.warn('Empty text found on H1 ('+(i+1)+') element: ', this);
});

console.info('%c' + 'Total of empty h1s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H1 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H2 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h2:empty').each(function(i) {
    console.warn('Empty text found on H2 ('+(i+1)+') element: ', this);
});

console.info('Total of empty h2s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H2 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H3 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h3:empty').each(function(i) {
    console.warn('Empty text found on H3 ('+(i+1)+') element: ', this);
});

console.info('Total of empty h3s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H3 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H4 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h4:empty').each(function(i) {
    console.warn('Empty text found on H4 ('+(i+1)+') element: ', this);
});

console.info('Total of empty h4s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H4 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H5 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h5:empty').each(function(i) {
    console.warn('Empty text found on H5 ('+(i+1)+') element: ', this);
});

console.info('Total of empty h5s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H5 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- H6 Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('h6:empty').each(function(i) {
    console.warn('Empty text found on H6 ('+(i+1)+') element: ', this);
});

console.info('Total of empty h6s found: ', $('h1:empty').length); 
console.log('%c' + '-------- H6 Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- Body Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');

$('body:empty').each(function(i) {
    console.warn('No text found in body tag ', this);
});

if ($('body').length > 1) {
    console.warn('More than one body tag found');
}

console.log('%c' + '-------- Body Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '-------- Image Test (Begin) --------', 'background: #999; color: #333;font-weight:bold;');
$('img[alt=\"\"]').each(function(i) {
    console.warn('Empty alt text found on image ('+(i+1)+') src: '  + this.src, this);
});

$('img[src=\"\"]').each(function(i) {
    console.warn('Empty src found on image ('+(i+1)+') src: ' + this.src, this);
});

console.info('Total of empty alt attributes found: ', $('img[alt=\"\"]').length); 

console.log('%c' + '-------- Image Test (End) ----------', 'background: #999; color: #333;font-weight:bold;');
console.log(''); // line break

console.log('%c' + '---------------------------------- SEO Audit Test Cases (Complete) ----------------------------------', 'background: #222; color: #fc3;font-weight:bold;');
