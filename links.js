(function() {
  const tooltips = [
    { pattern: 'uib.no/personer/Nello',         title: 'University profile' },
    { pattern: 'github.com/blasern',            title: 'GitHub' },
    { pattern: 'arxiv.org/a/blaser',            title: 'arXiv' },
    { pattern: 'orcid.org/',                    title: 'ORCID' },
    { pattern: 'dblp.org/',                     title: 'DBLP' },
    { pattern: 'scholar.google.com/',           title: 'Google Scholar' },
  ];

  for (const link of document.getElementsByTagName('a')) {
    const href = link.getAttribute('href') || '';
    if (/^(https?:)?\/\//.test(href)) link.target = '_blank';
    for (const { pattern, title } of tooltips) {
      if (href.includes(pattern)) { link.title = title; break; }
    }
  }
})();