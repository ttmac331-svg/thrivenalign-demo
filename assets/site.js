/* ThriveNAlign clickable demo. Static, offline, no tracking, no data collection. */
const NEEDS = [
  {id:"money",ic:"💵",name:"Money",blurb:"Budgeting, bills, debt and saving",intro:"Feeling stretched? Start small. Pick one training, try the EachCheck budgeting tool, or talk to a free nonprofit counselor."},
  {id:"family",ic:"🏡",name:"Family and relationships",blurb:"Communication, parenting, home life",intro:"Every family goes through hard seasons. Here are gentle starting points for stronger communication and support at home."},
  {id:"career",ic:"💼",name:"Career",blurb:"Jobs, skills and next steps",intro:"Looking for work or a better fit? Start with the basics, then connect with free job help near you."},
  {id:"support",ic:"🤝",name:"Find support",blurb:"Counseling, crisis lines, community help",intro:"",href:"support.html"},
  {id:"pros",ic:"🧰",name:"Find a local pro",blurb:"Trusted local services, reviewed with care",intro:"",href:"directory.html"},
  {id:"community",ic:"🌱",name:"Community",blurb:"Stories, events and ways to join",intro:"",href:"community.html"}
];
const TRAININGS = [
  {t:"Build a Budget That Fits Your Paycheck",need:"money",d:"A plain-language walkthrough of tracking what comes in and what goes out, one paycheck at a time.",len:"Self-paced, about 20 min"},
  {t:"Getting Ahead of Debt, One Step at a Time",need:"money",d:"How to list what you owe, choose a payoff order and talk to lenders with confidence.",len:"Self-paced, about 25 min"},
  {t:"Talking About Money as a Family",need:"family",d:"Simple ways to plan, set goals and avoid money arguments at home.",len:"Self-paced, about 15 min"},
  {t:"Healthy Communication at Home",need:"family",d:"Listening, setting boundaries and working through conflict calmly.",len:"Self-paced, about 20 min"},
  {t:"Resume and Interview Basics",need:"career",d:"Put your experience on one page and walk into interviews prepared.",len:"Self-paced, about 30 min"},
  {t:"Planning Your Next Career Move",need:"career",d:"Figure out your strengths, explore options and set a 90 day plan.",len:"Self-paced, about 25 min"}
];
const SUPPORT = [
  {t:"988 Suicide and Crisis Lifeline",need:"support",d:"Call or text 988, or chat online, any time. Free and confidential. Veterans can press 1.",link:"https://988lifeline.org",crisis:true},
  {t:"Crisis Text Line",need:"support",d:"Text HOME to 741741 to reach a trained crisis counselor, any time.",link:"https://www.crisistextline.org",crisis:true},
  {t:"211, local help for everyday needs",need:"support money family career",d:"Dial 211 or search online for food, housing, utilities, childcare and more near you.",link:"https://www.211.org"},
  {t:"National Domestic Violence Hotline",need:"support family",d:"Call 1-800-799-7233 or text START to 88788. Free, confidential, 24/7.",link:"https://www.thehotline.org"},
  {t:"SAMHSA National Helpline",need:"support",d:"Call 1-800-662-4357 for free, confidential treatment referral and information, 24/7.",link:"https://www.samhsa.gov/find-help/helplines/national-helpline"},
  {t:"FindTreatment.gov",need:"support",d:"Federal locator for mental health and substance use treatment.",link:"https://findtreatment.gov"},
  {t:"APA Psychologist Locator",need:"support family",d:"An established directory of licensed psychologists, run by the American Psychological Association.",link:"https://locator.apa.org"},
  {t:"NFCC nonprofit credit counseling",need:"money",d:"Find a nonprofit credit counselor for budgeting, debt and housing questions.",link:"https://www.nfcc.org"},
  {t:"CareerOneStop",need:"career",d:"U.S. Department of Labor resource for job search help and American Job Centers near you.",link:"https://www.careeronestop.org"}
];
const PROS = [
  {t:"Bright Path Plumbing",cat:"Plumber",area:"Example City",v:true,d:"Repairs, water heaters and drains.",checks:"License number checked, insurance on file"},
  {t:"Sparkwise Electric",cat:"Electrician",area:"Example City",v:true,d:"Wiring, panels and safety inspections.",checks:"License number checked"},
  {t:"Front Porch Realty",cat:"Realtor",area:"Example County",v:false,d:"First time buyers and renters.",checks:"Profile submitted, review pending"},
  {t:"Steady Hands Handyman",cat:"Handyman",area:"Example City",v:false,d:"Small repairs and assembly.",checks:"Profile submitted, review pending"},
  {t:"Open Door Tax Help",cat:"Tax preparer",area:"Example County",v:true,d:"Individual and family tax filing.",checks:"Credential checked"}
];
const EVENTS = [
  {t:"Money Monday: Budget Basics Live",when:"Example date, 7 PM",where:"Online",d:"A free, friendly walkthrough with time for questions."},
  {t:"Family Game and Resource Night",when:"Example date, 6 PM",where:"Example community center",d:"Meet neighbors and local organizations."},
  {t:"Resume Review Pop Up",when:"Example date, 10 AM",where:"Example library",d:"Bring your resume, leave with one clear next step."}
];
const STORIES = [
  {t:"\u201cI finally knew where my paycheck was going.\u201d",who:"Example story, name withheld",d:"A short story about starting the budgeting training and sticking with it."},
  {t:"\u201cI didn\u2019t know 211 existed.\u201d",who:"Example story, name withheld",d:"How one call led to help with a utility bill."}
];
const EX = '<span class="ex">Example content</span>';
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const needHref = n => n.href || ("need.html?id="+n.id);

function shell(active){
  const links=[["index.html","Home"],["trainings.html","Learn"],["tools.html","Tools"],["support.html","Support"],["directory.html","Local pros"],["community.html","Community"],["about.html","About"]];
  return `<div class="demo-banner">Concept demo for review. Example content is labeled. Nothing on this site is saved, sent or tracked.</div>
  <header class="top"><div class="bar"><a class="logo" href="index.html">Thrive<span>N</span>Align</a>
  <nav class="main">${links.map(([h,l])=>`<a href="${h}" class="${active===h?'on':''}">${l}</a>`).join("")}</nav></div>
  <div class="search"><input id="q" type="search" placeholder="Search trainings, tools, support, pros..." aria-label="Search"><button id="qb">Search</button></div></header>`;
}
function foot(){return `<footer><div class="in"><b>ThriveNAlign</b> concept demo. Not a live service. Trainings, providers, events and stories shown here are examples unless noted. Crisis and support lines link to real national resources. If you are in danger, call 911. If you are in crisis, call or text 988.</div></footer>`}
function trainingCard(x){return `<div class="card">${EX}<h3>${esc(x.t)}</h3><p>${esc(x.d)}</p><span class="tag">Free</span><span class="tag">${esc(x.len)}</span><p style="margin-top:10px"><a class="btn ghost" href="trainings.html">Start training</a></p></div>`}
function supportCard(x){return `<div class="card"><span class="tag">${x.crisis?"Crisis support":"Real national resource"}</span><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p><a href="${x.link}" target="_blank" rel="noopener">Visit ${esc(x.link.replace(/^https?:\/\/(www\.)?/,""))}</a></div>`}
function proCard(x){return `<div class="card">${EX} <span class="badge ${x.v?'v':'nv'}">${x.v?'Verified':'Not verified'}</span><h3>${esc(x.t)}</h3><p><b>${esc(x.cat)}</b> · ${esc(x.area)}</p><p>${esc(x.d)}</p><p style="font-size:13px">What we checked: ${esc(x.checks)}</p><button class="btn ghost" onclick="alert('Demo only. In a live version this would open a contact form for the provider. Nothing is sent.')">Contact (demo)</button></div>`}
function eachCheck(){return `<div class="card" style="border-color:var(--brand)"><span class="tag">Everyday tool</span><h3>EachCheck</h3><p>A budgeting tool for planning each paycheck: what to set aside for bills, what to save and what is left to live on.</p><p style="font-size:14px"><b>When it helps:</b> you get paid weekly or every two weeks, bills feel scattered, or you want one simple plan per check.</p><a class="btn" href="#" onclick="alert('Demo only. This button will link to her live EachCheck tool.');return false">Open EachCheck</a></div>`}
function eventCard(x){return `<div class="card">${EX}<h3>${esc(x.t)}</h3><p><b>${esc(x.when)}</b> · ${esc(x.where)}</p><p>${esc(x.d)}</p><button class="btn ghost" onclick="alert('Demo only. RSVP is not active.')">RSVP (demo)</button></div>`}
const crisisBox = `<div class="crisis"><b>In crisis or thinking about suicide?</b> Call or text <b>988</b>, any time. In immediate danger, call <b>911</b>. <a href="https://988lifeline.org" target="_blank" rel="noopener">988lifeline.org</a></div>`;
const joinBox = `<div class="card"><h3>Join the movement</h3><p>Get stories, events and new resources.</p><div class="join"><input id="je" type="email" placeholder="you@example.com" aria-label="Email"><button class="btn" id="jb">Join</button></div><div id="joinmsg">Demo only. This field does nothing. Your email is not saved or sent anywhere.</div></div>`;

const PAGES = {
  home(){return `<section class="hero"><h1>What do you need today?</h1><p>ThriveNAlign helps you find a useful starting point and take the next step at your own pace. Free trainings, everyday tools, trusted support and community, all in one place.</p><a class="btn" href="#needs">Find my starting point</a> <a class="btn ghost" href="about.html">About the movement</a></section>
  <h2 id="needs">Choose where to start</h2><div class="tiles">${NEEDS.map(n=>`<a class="tile" href="${needHref(n)}"><span class="ic">${n.ic}</span><b>${n.name}</b><small>${n.blurb}</small></a>`).join("")}</div>
  <h2>Start learning for free</h2><div class="grid">${TRAININGS.slice(0,3).map(trainingCard).join("")}</div><p><a href="trainings.html">See all six trainings</a></p>
  <h2>A tool for every paycheck</h2><div class="grid">${eachCheck()}</div>
  <h2>How it works</h2><ol class="steps"><li><b>Tell us what you need.</b> Pick a tile or search.</li><li><b>Find a starting point.</b> A training, a tool, a support line or a local pro.</li><li><b>Take your next step.</b> At your own pace, with no judgment.</li></ol>
  <h2>Our promise on trust</h2><div class="card"><p>We review every listing. Each one shows a <span class="badge v">Verified</span> or <span class="badge nv">Not verified</span> label so you know exactly what we checked. Paying for a listing never buys a better badge. <a href="about.html#trust">How we review</a></p></div>
  ${crisisBox}<h2>Be part of it</h2>${joinBox}`},
  need(){const id=new URLSearchParams(location.search).get("id")||"money";const n=NEEDS.find(x=>x.id===id)||NEEDS[0];
    const tr=TRAININGS.filter(x=>x.need===id), sp=SUPPORT.filter(x=>x.need.split(" ").includes(id));
    return `<div class="crumbs"><a href="index.html">← Home</a> / ${n.name}</div><section class="hero"><h1>${n.ic} ${n.name}</h1><p>${n.intro}</p></section>
    <h2>1. Start with a training</h2><div class="grid">${tr.map(trainingCard).join("")}</div>
    ${id==="money"?`<h2>2. Try a tool</h2><div class="grid">${eachCheck()}</div>`:""}
    <h2>${id==="money"?"3":"2"}. Get free support</h2><div class="grid">${sp.map(supportCard).join("")}</div>
    <h2>${id==="money"?"4":"3"}. Keep going</h2><div class="grid"><a class="tile" href="community.html"><span class="ic">🌱</span><b>Events and community</b><small>Learn with others</small></a><a class="tile" href="directory.html"><span class="ic">🧰</span><b>Find a local pro</b><small>Reviewed listings</small></a><a class="tile" href="index.html"><span class="ic">🏠</span><b>Back to home</b><small>Pick another need</small></a></div>`},
  trainings(){return `<div class="crumbs"><a href="index.html">← Home</a> / Learn</div><section class="hero"><h1>Free trainings</h1><p>Short, practical, text based trainings you can take at your own pace.</p></section>
    <div class="note">The six titles below are example placeholders. Her six real free trainings would go here.</div>
    <div class="filters" id="tf">${[["all","All"],["money","Money"],["family","Family"],["career","Career"]].map(([v,l],i)=>`<button class="chip ${i?'':'on'}" data-v="${v}">${l}</button>`).join("")}</div><div class="grid" id="tl">${TRAININGS.map(trainingCard).join("")}</div>
    <h2>Coming later</h2><div class="card"><p>Live workshops and webinars, and in a later phase, optional paid courses. The free core stays free.</p></div>`},
  tools(){return `<div class="crumbs"><a href="index.html">← Home</a> / Tools</div><section class="hero"><h1>Everyday tools</h1><p>Useful tools, with a clear note on when each one helps.</p></section><div class="grid">${eachCheck()}<div class="card">${EX}<h3>Bill due date planner</h3><p>An example of a future tool idea: a simple printable calendar for due dates.</p></div><div class="card">${EX}<h3>Emergency fund goal tracker</h3><p>An example of a future tool idea: set a small goal and track progress.</p></div></div>`},
  support(){return `<div class="crumbs"><a href="index.html">← Home</a> / Find support</div><section class="hero"><h1>Find support</h1><p>Real, established services that can help. ThriveNAlign does not provide counseling or clinical care. We point you to trusted places that do.</p></section>${crisisBox}
    <h2>Crisis and urgent help</h2><div class="grid">${SUPPORT.filter(x=>x.crisis).map(supportCard).join("")}</div>
    <h2>Everyday help and counseling</h2><div class="grid">${SUPPORT.filter(x=>!x.crisis).map(supportCard).join("")}</div>
    <div class="note">These are real national resources, listed as a starting point. Details can change, so please check each site. We link to established, credentialed directories instead of listing individual therapists ourselves.</div>`},
  directory(){return `<div class="crumbs"><a href="index.html">← Home</a> / Local pros</div><section class="hero"><h1>Find a local pro</h1><p>A small, hand reviewed list of local services. Every listing tells you exactly what we checked.</p></section>
    <div class="note"><b>All providers on this page are fictional example listings.</b> They are not real businesses.</div>
    <div class="card"><h3>What the badges mean</h3><p><span class="badge v">Verified</span> We checked the items listed on the card, such as a state license number or insurance certificate, on the date shown in a live version.</p><p><span class="badge nv">Not verified</span> The provider submitted a profile, but we have not checked it yet. Use your own judgment.</p><p>A badge is never sold. Paid placement, if it ever exists, would be clearly labeled "Sponsored" and would not change a badge.</p></div>
    <div class="filters" id="pf">${["All","Plumber","Electrician","Realtor","Handyman","Tax preparer"].map((c,i)=>`<button class="chip ${i?'':'on'}" data-v="${c}">${c}</button>`).join("")}<button class="chip" data-v="verified">Verified only</button></div><div class="grid" id="pl">${PROS.map(proCard).join("")}</div>
    <p style="font-size:14px;color:var(--muted)">See something wrong? A live version would include a "Report this listing" link on every card.</p>`},
  community(){return `<div class="crumbs"><a href="index.html">← Home</a> / Community</div><section class="hero"><h1>Community and the movement</h1><p>Stories, events and ways to show up for each other.</p></section>
    <h2>Upcoming events</h2><div class="grid">${EVENTS.map(eventCard).join("")}</div>
    <h2>Stories</h2><div class="grid">${STORIES.map(s=>`<div class="card">${EX}<h3>${s.t}</h3><p>${esc(s.d)}</p><p style="font-size:13px">${esc(s.who)}</p></div>`).join("")}</div>
    <h2>Ways to take part</h2><div class="grid"><div class="card"><h3>Share your story</h3><p>Tell others what helped you.</p></div><div class="card"><h3>Volunteer or host</h3><p>Lead a workshop or host a resource night.</p></div><div class="card"><h3>Partner with us</h3><p>Community groups, employers and faith organizations.</p></div></div>
    <h2>Join</h2>${joinBox}`},
  about(){return `<div class="crumbs"><a href="index.html">← Home</a> / About</div><section class="hero"><h1>About the movement</h1><p>ThriveNAlign is a movement and an everyday resource hub. Whether you want to learn a skill, find support, manage money or find a reliable professional, this is a place you can turn to for a helpful next step.</p></section>
    <h2>What we believe</h2><div class="grid"><div class="card"><h3>Start where you are</h3><p>No judgment and no pressure. One small step counts.</p></div><div class="card"><h3>Practical over perfect</h3><p>Plain language and useful tools.</p></div><div class="card"><h3>Help is for everyone</h3><p>The core resources are free. Money never decides who gets help.</p></div></div>
    <h2 id="trust">How we keep it trustworthy</h2><ol class="steps"><li><b>Every listing is reviewed</b> before it appears.</li><li><b>Clear labels.</b> Verified or Not verified, with what we checked.</li><li><b>Easy to report.</b> Outdated or wrong info can be flagged and fixed.</li><li><b>Extra care for counseling.</b> We link to credentialed directories and crisis lines rather than listing therapists ourselves.</li><li><b>Privacy first.</b> We collect as little as possible and never sell your information.</li></ol>
    <div class="note">About this demo: a concept mockup for review. Words and examples are drafts.</div>`},
  search(){return `<div class="crumbs"><a href="index.html">← Home</a> / Search</div><h1 id="sh">Search</h1><div id="sr"></div>`}
};

function runSearch(q){
  q=q.trim().toLowerCase();const m=x=>JSON.stringify(x).toLowerCase().includes(q);
  const groups=[["Trainings",TRAININGS.filter(m).map(trainingCard)],["Support",SUPPORT.filter(m).map(supportCard)],["Local pros",PROS.filter(m).map(proCard)],["Events",EVENTS.filter(m).map(eventCard)]];
  if("eachcheck budget money paycheck tool".split(" ").some(w=>w.includes(q)||q.includes(w)))groups.unshift(["Tools",[eachCheck()]]);
  const any=groups.some(g=>g[1].length);
  document.getElementById("sh").textContent=q?`Results for "${q}"`:"Search";
  document.getElementById("sr").innerHTML=!q?'<p class="empty">Type a word like budget, resume, plumber or counseling.</p>':any?groups.filter(g=>g[1].length).map(([h,c])=>`<h2>${h}</h2><div class="grid">${c.join("")}</div>`).join(""):`<p class="empty">Nothing matched yet. Try another word, or <a href="index.html">pick a need</a>. If you need help now, dial 211, or call or text 988 in a crisis.</p>`;
}
function chips(id,list,render,match){const f=document.getElementById(id);if(!f)return;f.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;f.querySelectorAll(".chip").forEach(c=>c.classList.remove("on"));b.classList.add("on");document.getElementById(list).innerHTML=render(b.dataset.v)})}

document.addEventListener("DOMContentLoaded",()=>{
  const page=document.body.dataset.page, file={home:"index.html",need:"",trainings:"trainings.html",tools:"tools.html",support:"support.html",directory:"directory.html",community:"community.html",about:"about.html",search:""}[page];
  document.body.insertAdjacentHTML("afterbegin",shell(file));
  document.getElementById("app").innerHTML=PAGES[page]();
  document.body.insertAdjacentHTML("beforeend",foot());
  const qi=document.getElementById("q"),go=()=>{location.href="search.html?q="+encodeURIComponent(qi.value)};
  document.getElementById("qb").onclick=go;qi.addEventListener("keydown",e=>{if(e.key==="Enter")go()});
  if(page==="search"){const q=new URLSearchParams(location.search).get("q")||"";qi.value=q;runSearch(q);qi.addEventListener("input",()=>runSearch(qi.value))}
  chips("tf","tl",v=>TRAININGS.filter(x=>v==="all"||x.need===v).map(trainingCard).join(""));
  chips("pf","pl",v=>PROS.filter(x=>v==="All"||(v==="verified"?x.v:x.cat===v)).map(proCard).join(""));
  const jb=document.getElementById("jb");if(jb)jb.onclick=()=>{document.getElementById("je").value="";document.getElementById("joinmsg").textContent="Thanks for trying it. This is a demo, so nothing was saved or sent."};
});
