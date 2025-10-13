 // 學院小選單切換功能
    const navLinks = document.querySelectorAll('#studentSubNav a');
    const houseSections = document.querySelectorAll('.house-students');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetHouse = link.dataset.house;
            houseSections.forEach(section => {
                section.style.display = section.id === 'house-' + targetHouse ? 'block' : 'none';
            });

            document.getElementById('division-detail').style.display = 'none';
        });
    });

    // 學生點擊事件
    const divisionData = {
        holfindo: {
'學生1': {
  img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403854695944163439/image.png?...',
  text: '介紹',
  twitch: 'https://www.twitch.tv/your_channel' 
},

    '學生2': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生2',
    text: '介紹',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生3',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生4',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生5',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生6',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生7',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生8',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生9',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生10',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生11',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生12',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    skmalin: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生1',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生2',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生3',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生4',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生5',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生6',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生7',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生8',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生9',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生10',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生11',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=坎普費爾學生12',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    rowenpaf: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生1',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生2',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生3',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生4',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生5',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生6',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生7',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生8',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生9',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生10',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生11',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=赫文帕夫學生12',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    twicklow: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生1',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生2',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生3',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生4',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生5',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生6',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生7',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生8',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生9',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生10',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生11',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生12',
    text: '介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const studentListSection = document.getElementById('students-section');
  const studentSubNav = document.getElementById('studentSubNav');
  const divisionDetail = document.getElementById('division-detail');
  const divisionImg = document.getElementById('division-img');
  const divisionText = document.getElementById('division-text');
  const closeDetailBtn = document.getElementById('close-detail');
  const contentWrapper = divisionDetail.querySelector('.content-wrapper');


  function closeDivisionDetail() {
    divisionDetail.style.display = 'none';
    if (studentListSection) studentListSection.style.display = 'block';
    if (studentSubNav) studentSubNav.style.display = 'flex';
    // divisionImg.src = '';
    // divisionText.textContent = '';
    const actions = document.getElementById('division-actions');
    if (actions) actions.innerHTML = '';
  }


  if (closeDetailBtn) {
    closeDetailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDivisionDetail();
    });
  }


  divisionDetail.addEventListener('click', (e) => {
    if (!contentWrapper.contains(e.target) && e.target !== closeDetailBtn) {
      closeDivisionDetail();
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && divisionDetail.style.display === 'block') {
      closeDivisionDetail();
    }
  });


  document.querySelectorAll('.student-card').forEach(card => {
    card.addEventListener('click', () => {
      const student = card.dataset.student;
      const house = card.dataset.house;
      const detail = (divisionData[house] && divisionData[house][student]) || null;

      if (!detail) {
        alert('該學生的分業資料尚未設定。');
        return;
      }

  
      divisionImg.src = detail.img || '';
      divisionImg.alt = (student || '') + ' 分業圖片';
      divisionText.textContent = detail.text || '';

      renderTwitchButton(detail.twitch);

   
      divisionDetail.style.display = 'block';
      if (studentListSection) studentListSection.style.display = 'none';
      if (studentSubNav) studentSubNav.style.display = 'none';

    
      divisionDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  function renderTwitchButton(url) {
    let actions = document.getElementById('division-actions');
    if (!actions) {
      const wrapper = document.createElement('div');
      wrapper.id = 'division-actions';
      divisionText.after(wrapper);
      actions = wrapper;
    }
    actions.innerHTML = '';

    if (!url) {
      const disabledBtn = buildTwitchAnchor('#', true);
      disabledBtn.title = '尚未提供 Twitch 連結';
      actions.appendChild(disabledBtn);
      return;
    }

    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const btn = buildTwitchAnchor(href, false);
    actions.appendChild(btn);
  }

  function buildTwitchAnchor(href, disabled) {
    const a = document.createElement('a');
    a.className = 'twitch-btn';
    a.setAttribute('role', 'button');

    if (disabled) {
      a.setAttribute('aria-disabled', 'true');
      a.textContent = 'Twitch（未提供）';
    } else {
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:18px;height:18px;vertical-align:-3px;margin-right:6px">
          <path fill="currentColor" d="M4 3h16v10.5L16 17H12l-2.5 2.5H8V17H4V3zm14 2H6v9h3v2l2-2h4l3-3.5V5zM14 7h2v4h-2V7zm-5 0h2v4H9V7z"/>
        </svg>
        前往 Twitch
      `;
    }
    return a;
  }
});





    // 學院資料
     const academies = {
        gryffindor: {
        title: '霍爾芬多',
    desc: '霍爾芬多分院代表的是忠誠與榮譽，以忠實守護他人與誓言為信條，這個分院的學生往往來自那些有著強烈責任感的家族，無論是人類、精靈還是矮人，對於他們來說，忠誠不僅僅是一種品德，更是一種力量，分院的座右銘是：“守護不僅是使命，更是信仰”。霍爾芬多分院的校徽是一隻展翅的雄鷹，象徵著勇氣和無畏的守護精神。',
    notes: '特色：勇氣、無畏、守護精神。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/badge%2FHolfindo.png?alt=media&token=d13e790b-1dd8-47ad-bfdc-46233b12da78',
    alt: '霍爾芬多 學院徽章'
    },
    hufflepuff: {
        title: '赫文帕夫',
    desc: '赫文帕夫分院代表的是和諧與平衡，學院中最為和平與內斂的一個分院，這個分院的學生通常具有優雅的氣質與溫和的性格，他們更重視魔法對自然界與他人情感的影響，而不是單純的力量，赫文帕夫的校徽是一隻鹿，象徵著潔淨與和諧的力量。',
    notes: '特色：潔淨、和諧。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/badge%2FHuwenpaf.png?alt=media&token=54556e65-5bf8-4c66-beab-259955e6e785',
    alt: '赫文帕夫 學院徽章'
    },
    ravenclaw: {
        title: '特威克羅',
    desc: '特威克羅分院代表的是智慧與知識，學院中最為神秘與學術性的一個分院，這個分院的學生熱衷於探索魔法的理論與奧秘，他們相信，知識是解決世界所有問題的關鍵，他們的目標是推動魔法科學的邊界，並發掘那些被隱藏於世界之間的奧秘，特威克勞的校徽是一隻睿智的貓頭鷹，象徵著對知識的無窮渴求與探索的無畏精神。',
    notes: '特色：智慧、知識、創造力。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/badge%2FTwicklaw.png?alt=media&token=272163f0-24fd-4aee-86c0-f2dd0dc6202b',
    alt: '特威克羅 學院徽章'
    },
    slytherin: {
        title: '坎普費爾',
    desc: '坎普費爾分院代表的是力量和權威，強調的是身體與心靈的鍛煉，這個分院的學生不僅擅長攻擊魔法與戰鬥技巧，更追求自我強化與對於力量的無限渴望，他們相信，唯有經歷過無數的挑戰與磨難，才能真正掌握強大的力量。坎普費爾分院的校徽是一條青蛇，象徵著強大的力量與狡詐之美',
    notes: '特色：野心、狡猾、領導力。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/badge%2Fkampfer.png?alt=media&token=bc24f915-c784-45fb-ba84-e9a64f24fd57',
    alt: '坎普費爾 學院徽章'
    }
  };

    const academySelector = document.getElementById('academySelector');
    const academyContent = document.getElementById('academyContent');

  // 綁定按鈕事件
  academySelector.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.academy;

            
            academySelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showAcademy(key);
        });
  });

    function showAcademy(key) {
    const a = academies[key];
    if (!a) {
        academyContent.innerHTML = '<p style="color:#d6c98b;">尚未設定此學院內容。</p>';
    return;
    }
    academyContent.innerHTML = `
    <div class="academy-card" role="region" aria-label="${escapeHtml(a.title)}">
        <div class="academy-text">
            <h2>${escapeHtml(a.title)}</h2>
            <p>${escapeHtml(a.desc)}</p>
            <p><strong>${escapeHtml(a.notes)}</strong></p>
        </div>
        <div class="academy-image">
            <img src="${escapeHtml(a.img)}" alt="${escapeHtml(a.alt)}">
        </div>
    </div>
    `;
  }

    function escapeHtml(str) {
    if (!str) return '';
    return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

document.addEventListener('DOMContentLoaded', () => {
    showAcademy('gryffindor');
});


const logo = document.getElementById('logo');
const nav = document.querySelector('nav');
const entryPage = document.getElementById('entryPage');
const homeSection = document.getElementById('home');

function showEntryPage() {
    entryPage.style.display = 'flex';
    nav.style.display = 'none';
    logo.style.display = 'none';  
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
}

function showHomePage() {
    entryPage.style.display = 'none';
    nav.style.display = 'block';
    logo.style.display = 'block'; 
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    homeSection.classList.add('active');
}


showEntryPage();


logo.addEventListener('click', function (e) {
    e.preventDefault();
    showHomePage();
});


document.getElementById('joinBtn').addEventListener('click', function () {
    showHomePage();
});


document.addEventListener('DOMContentLoaded', function () {
    const entryPage = document.getElementById('entryPage');
    const joinBtn = document.getElementById('joinBtn');
    const nav = document.querySelector('nav');
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const musicLabel = document.getElementById('musicLabel');

   
    bgMusic.volume = 0.18; // 
    bgMusic.loop = true;

    joinBtn.addEventListener('click', () => {
        entryPage.style.display = 'none';
        nav.style.display = 'block';
        showSection('home');

        bgMusic.play().then(() => {
            musicIcon.textContent = '⏸';
            musicToggle.setAttribute('aria-pressed', 'true');
            musicLabel.textContent = '音樂：播放中';
        }).catch((err) => {
            musicIcon.textContent = '▶';
            musicToggle.setAttribute('aria-pressed', 'false');
            musicLabel.textContent = '音樂';
            console.warn('播放音樂遭到瀏覽器阻擋或錯誤：', err);
        });
    });

    // 音樂切換按鈕
    musicToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicIcon.textContent = '⏸';
                musicToggle.setAttribute('aria-pressed', 'true');
                musicLabel.textContent = '音樂：播放中';
            }).catch(err => {
                console.warn('播放音樂失敗：', err);
            });
        } else {
            bgMusic.pause();
            musicIcon.textContent = '▶';
            musicToggle.setAttribute('aria-pressed', 'false');
            musicLabel.textContent = '背景音樂（暫停）';
        }
    });

    document.querySelectorAll('nav a[data-section]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
        });
    });

    // 學生介紹點擊
    document.getElementById('studentIntroNav').addEventListener('click', e => {
        e.preventDefault();
        showSection('students');
        setActiveHouse('holfindo');
    });

    // 學院小選單切換
    const houseLinks = document.querySelectorAll('#studentSubNav a');
    houseLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const house = link.dataset.house;
            setActiveHouse(house);
        });
    });

    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');
        houseLinks.forEach(link => link.classList.remove('active'));

        if (sectionId === 'students') {
            document.getElementById('students').classList.add('active');
            setActiveHouse('holfindo');
        } else {
            const sec = document.getElementById(sectionId);
            if (sec) sec.classList.add('active');
           if (sectionId === 'map') {
    const mapContentHasCard = !!document.querySelector('#mapContent .map-card');

    if (!mapContentHasCard) {
        showMap('school');


        const allBtns = document.querySelectorAll('#mapSelector button');
        const schoolBtn = document.querySelector('#mapSelector button[data-map="school"]');

        allBtns.forEach(b => b.classList.remove('active'));
        if (schoolBtn) schoolBtn.classList.add('active');
          }
          }
		}
    }

    function setActiveHouse(houseKey) {
        document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');
        const el = document.getElementById('house-' + houseKey);
        if (el) el.style.display = 'block';
        houseLinks.forEach(link => {
            if (link.dataset.house === houseKey) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    
    // 地圖功能

    const maps = {
        school: {
            title: '麥格華茲',
            desc: '麥格華茲學院座落於神秘的萊卡城，這是一座融合多種族文化與歷史的魔法都市。學院致力於培養年輕一代的魔法師，促進不同種族間的理解與合作，共同維護大陸的和平與繁榮。學院最獨特之處在於它的四個分院，每個分院代表著不同的價值觀與特質，讓學生能依照自身天賦與性格獲得最適合的指導與成長環境。透過這樣的分院制度，學生不僅能學習強大的魔法技能，更能培養出領導力、勇氣與智慧。',
            notes: '特色：傳承奧秘、多元共融、卓越教育。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2FMG.png?alt=media&token=2c79c111-fec4-48de-ae4e-4a5f780b8c4b',
            alt: '麥格華茲 圖片'
        },

        dwarf: {
            title: '矮人城塞',
            desc: '矮人城塞位於高聳岩巒之中，石砌建築與鍛造作坊遍佈其間。這裡的矮人工匠擅長打造堅固盔甲與精密機械，城內常有金屬火花與悠揚的敲擊聲。來到此地，旅者會被深厚的歷史感與工藝魅力所吸引。',
            notes: '特色：地下鍛造坊、堅固城牆、古老礦道。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2Fdwarf.png?alt=media&token=054a339f-70cc-4964-814d-7a8478904a11',
            alt: '矮人城塞 圖片'
        },
		
        sakura: {
            title: '櫻花城',
            desc: '櫻花城以滿山的櫻花聞名，春季時整座城猶如粉色海洋。城中的古寺和茶屋保存了細緻的禮儀與傳統，吸引詩人與畫家長期駐足創作。',
            notes: '特色：櫻花大道、古寺、季節祭典。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2FCherry.png?alt=media&token=8969bf83-6f3d-46d4-b882-d1d4e6c0fb21',
            alt: '櫻花城 圖片'
        },
        elves: {
            title: '精靈城邦',
            desc: '精靈城邦隱匿於古老森林的樹冠之上，以輕盈優雅的建築和自然魔法融合為特色。精靈們與自然和諧共處，擅長治癒與自然魔法，是求學與靈性修養的理想之地。',
            notes: '特色：樹屋建築、自然魔法、長生傳說。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2FElf.png?alt=media&token=46f4a272-299b-4203-abe5-9b9e4f1b3e2e',
            alt: '精靈城邦 圖片'
        },
        snow: {
            title: '希臘城',
            desc: '希臘城依山傍海而建，白色大理石殿堂與橘頂圓塔林立，宛如眾神居所。街道間遍布石柱與壁畫，記錄著古老神話與英雄傳說。旅者能在此感受到濃厚的文化底蘊與神聖氛圍。',
            notes: '神殿建築、神話傳說、英雄紀念碑。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2FGreece.png?alt=media&token=2e93d562-1355-480c-90e1-a18d9091c261',
            alt: '希臘城 圖片'
        }
    };

    const mapSelector = document.getElementById('mapSelector');
    const mapContent = document.getElementById('mapContent');


    mapSelector.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const key = btn.dataset.map;
            mapSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showMap(key);
        });
    });


    function showMap(key) {
        const m = maps[key];
        if (!m) {
            mapContent.innerHTML = '<p style="color:#d6c98b;">尚未設定此地圖內容。</p>';
            return;
        }

        mapContent.innerHTML = `
      <div class="map-card" role="region" aria-label="${m.title}">
        <div class="map-text">
          <h2>${escapeHtml(m.title)}</h2>
          <p>${escapeHtml(m.desc)}</p>
          <p><strong>${escapeHtml(m.notes)}</strong></p>
        </div>
        <div class="map-image">
          <img src="${escapeHtml(m.img)}" alt="${escapeHtml(m.alt)}">
        </div>
      </div>
    `;
    }


    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

   
});

/* ===========================
   =========================== */
(function () {
  const teacherData = {
  professor: {
    seruphi: {
      name: '賽露菲', // 可選：若要顯示用
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FSeruphi%202.png?alt=media&token=788261e3-799a-425c-85c3-1473f5bd8feb',
      text: `
【角色】賽露菲（Seruphi）
【種族】精靈  
【年齡】外表約20~30歲左右（實際年齡未知）  
【個性】活潑、待人溫柔，臉上總是掛著淡淡的微笑， 卻隱約散發一絲悲傷。  
【能力】神聖魔法
【領域】艾斯瑞達大陸古文明  
      `,

      twitch: 'https://www.twitch.tv/nerukozwz'
    },
      minasVeya: { // ✅ 改成英文 key
        name: '米納斯·薇婭',
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMinas%20Veya.png?alt=media&token=108659f6-c445-4eb6-97f6-95a1d900f7ff',
        text: `
【角色】米納斯·薇婭（Minas Veya）
【種族】精靈  
【年齡】外表約25歲上下  
【個性】溫柔理性，對學生總是語調平和、耐心十足，但絕不縱容欺騙行為。  
【能力】變形學、化獸術、高階守護魔法  
        `,
        twitch: 'https://www.twitch.tv/example2'
      },
      '教授4': {
        img: 'https://via.placeholder.com/320x200?text=%E6%95%99%E6%8E%884',
        text: '教授4的詳細介紹：幻術、心靈學派與認知結界實務。',
        twitch: 'https://www.twitch.tv/example4'
      }
    },
    // 導師（這裡將你原本 data-group="club" 的卡片視為導師類）
    mentor: {
      '社團老師': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FAiden%20Wesley.png?alt=media&token=dbfbdb57-e154-4880-a085-f0a7d49cc289',
        text: `
【角色】艾登·衛斯理（Aiden Wesley）
【種族】人類 （混血巫師 ）
【年齡】31歲  
【個性】溫柔且穩定、內向但堅定、高共感、低攻擊性、不爭主導權  
【能力】專精【魔法生物飼育學】與【防禦魔法實作】
      `,
        twitch: 'https://www.twitch.tv/sakura_ryoshin'
    },

  '社團導師二': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FLumiah.png?alt=media&token=58c5a0dc-a7e1-465c-a961-a1e4db7e97ce',
    text: `
【角色】露米婭・艾爾瑟芙（Lumiah Elserf）
【種族】半精靈
【年齡】26歲（實際年齡700-800歲左右）
【個性】甜美、活潑、開朗，像糖一樣能融化人心
【能力】魔法增幅、情緒與魔力的微光魔法
    `,
    twitch: ''
  },

  '社團導師三': {
    img: 'https://via.placeholder.com/320x200?text=%E7%A4%BE%E5%9C%98%E5%B0%8E%E5%B8%AB+3',
    text: `
【角色】——
【種族】——
【年齡】——
【個性】——
【能力】——
    `,
    twitch: ''
  },

  '社團導師四': {
    img: 'https://via.placeholder.com/320x200?text=%E7%A4%BE%E5%9C%98%E5%B0%8E%E5%B8%AB+4',
    text: `
【角色】——
【種族】——
【年齡】——
【個性】——
【能力】——
    `,
    twitch: ''
  }
},
	 // 學院領導層（leader）
   leader: {
      '校長': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FRB.png?alt=media&token=d402f940-7b6a-4c02-9695-8e89926dba2e',
        text: `
【角色】阿布斯．鄧不利朵
【種族】人類
【年齡】（未知年齡）
【個性】嘮叨、熱情、老謀深算。
【能力】深不可測。
`,
        twitch: ''
      },
      '副校長': {
  img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F123.png?alt=media&token=e6e45e2d-ab8e-4237-a268-e30c719053b9',
  text: `
【角色】利維坦・艾爾瑟芙 (Leviathan Elserf)
【種族】惡魔
【年齡】外表約22左右（未知年齡）
【個性】傲慢毒舌、理智冷靜，嘴巴很壞。
【能力】猩紅魔法、契約、魔力感知夜間異動。
`,
  twitch: ''
},


      '教務長': {
        img: 'https://via.placeholder.com/320x200?text=%E6%95%99%E5%8B%99%E9%95%B7',
        text: '教務長負責協調各分院教授課程與學術研究方向，以嚴謹著稱，曾編撰《魔法教育綱要》。',
        twitch: 'https://www.twitch.tv/academichead'
      }
    },
   // 其他人員（staff）
staff: {
  '餐廳姊姊': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2Fkitchen.png?alt=media&token=9264559c-b856-4ea3-b4f7-f48ec3636372',
    text: `
【角色】伊蘭蕾潔（Elanreje）
【種族】墮星惡魔
【年齡】不詳（傳聞時間尚未開始就已存在）
【個性】傲嬌又認真，對料理與植物都極度講究，嘴硬但心軟。
【能力】詛咒的黑暗魔法。
`,
    twitch: 'https://www.twitch.tv/medic'
  },
  
   '宿管': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FAsmode.png?alt=media&token=4cccf66f-ac8b-4727-ab31-2b3a5fcbeb88',
    text: `
【角色】阿斯莫德（Asmode）
【種族】惡魔
【年齡】不詳(看起來40~50歲，喜歡喬裝人類)
【個性】溫柔，但極具操控慾與誘惑性，討厭戀愛，因為母胎單身。
【能力】黑魔法、心像魔法。
`,
    twitch: 'https://www.twitch.tv/hedfu'
  },
  
  '侍僕': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FIris%20Nova.png?alt=media&token=cf75709d-4073-4e8e-8d53-79dd65d36eda',
    text: `
【角色】伊莉絲・諾瓦（Iris Nova）
【種族】獸人族
【年齡】貓齡2歲（相當於人類24歲）
【個性】有點迷糊、喜歡碎碎念、愛偷懶
【能力】水魔法。
`,
    twitch: 'https://www.twitch.tv/hanfeicat'
  },

 
  'Lily': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FLily.png?alt=media&token=6ed8898e-360b-4be9-ad00-29e5b99fb909', // 放角色圖片連結
    text: `
【角色】 Lily
【種族】 犬
【年齡】 不詳 
【個性】 捉摸不定
【能力】 來無影去無蹤
`,
    twitch: '' // 若無可留空字串
  }
}

	
  };
  
  


  const divisionDetail = document.getElementById('division-detail');
  const divisionImg    = document.getElementById('division-img');
  const divisionText   = document.getElementById('division-text');
  const closeDetailBtn = document.getElementById('close-detail');

  
  const hasRenderTwitch = typeof window.renderTwitchButton === 'function';

  function buildTwitchAnchor(href, disabled) {
    const a = document.createElement('a');
    a.className = 'twitch-btn';
    a.setAttribute('role', 'button');

    if (disabled) {
      a.setAttribute('aria-disabled', 'true');
      a.textContent = 'Twitch（未提供）';
    } else {
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:18px;height:18px;vertical-align:-3px;margin-right:6px">
          <path fill="currentColor" d="M4 3h16v10.5L16 17H12l-2.5 2.5H8V17H4V3zm14 2H6v9h3v2l2-2h4l3-3.5V5zM14 7h2v4h-2V7zm-5 0h2v4H9V7z"/>
        </svg>
        前往 Twitch
      `;
    }
    return a;
  }

  function renderTwitchButtonLocal(url) {
    let actions = document.getElementById('division-actions');
    if (!actions) {
      const wrapper = document.createElement('div');
      wrapper.id = 'division-actions';
      divisionText.after(wrapper);
      actions = wrapper;
    }
    actions.innerHTML = '';

    if (!url) {
      const disabledBtn = buildTwitchAnchor('#', true);
      disabledBtn.title = '尚未提供 Twitch 連結';
      actions.appendChild(disabledBtn);
      return;
    }

    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const btn = buildTwitchAnchor(href, false);
    actions.appendChild(btn);
  }

  
  const teacherCards = document.querySelectorAll('#teachers .teacher-card');

  teacherCards.forEach(card => {
    card.addEventListener('click', () => {
      const rawGroup = (card.getAttribute('data-group') || '').toLowerCase();
      const group = rawGroup === 'club' ? 'mentor' : rawGroup; 
      const nameFromAttr = card.getAttribute('data-teacher');
      const nameFromH2 = (card.querySelector('h2')?.textContent || '').trim();
      const displayName = (nameFromAttr || nameFromH2);

      const bucket = teacherData[group] || {};
      const detail = bucket[displayName];

      if (!detail) {
        alert(`找不到【${displayName}】的詳細資料，請在 teacherData.${group} 中補上。`);
        return;
      }

      
      divisionImg.src = detail.img || '';
      divisionImg.alt = `${displayName} 詳細圖片`;
      divisionText.textContent = detail.text || '';

      
      if (hasRenderTwitch) {
        window.renderTwitchButton(detail.twitch);
      } else {
        renderTwitchButtonLocal(detail.twitch);
      }     
      divisionDetail.style.display = 'block';
      divisionDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

 
  closeDetailBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    divisionDetail.style.display = 'none';
  });
})();


document.addEventListener('DOMContentLoaded', () => {
  const mainNav   = document.getElementById('mainNav');
  const navToggle = mainNav?.querySelector('.nav-toggle');
  const mainMenu  = document.getElementById('mainMenu');

  if (!mainNav || !navToggle || !mainMenu) return;

  function openMenu() {
    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    if (mainNav.classList.contains('open')) closeMenu();
    else openMenu();
  }
 
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  
  mainMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

 
  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('open') && !mainNav.contains(e.target)) {
      closeMenu();
    }
  });

  // Esc 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});



(function(){
  const teacherSec = document.getElementById('teachers');
  if(!teacherSec) return;
  const filterBar  = teacherSec.querySelector('.teacher-filter');
  const cards      = teacherSec.querySelectorAll('.teacher-card');
  if(!filterBar || !cards.length) return;

  const grid = document.createElement('div');
  grid.className = 'teacher-grid';
  cards.forEach(card => grid.appendChild(card));
  filterBar.insertAdjacentElement('afterend', grid);
})();



(function () {
  const modal = document.getElementById('division-detail');
  if (!modal) return;


  let block = null;

  window.lockDetail = function (lock) {
    if (lock) {
      modal.classList.add('no-scroll');
      block = function (e) { e.preventDefault(); e.stopPropagation(); };


      const targets = [
        modal,
        modal.querySelector('.content-wrapper'),
        modal.querySelector('#division-text')
      ].filter(Boolean);

      targets.forEach(el => {
        el.addEventListener('wheel', block, { passive: false });
        el.addEventListener('touchmove', block, { passive: false });
        el.addEventListener('scroll', block, { passive: false });
      });

    } else {
      modal.classList.remove('no-scroll');
      if (!block) return;

      const targets = [
        modal,
        modal.querySelector('.content-wrapper'),
        modal.querySelector('#division-text')
      ].filter(Boolean);

      targets.forEach(el => {
        el.removeEventListener('wheel', block);
        el.removeEventListener('touchmove', block);
        el.removeEventListener('scroll', block);
      });

      block = null;
    }
  };

 
})();



const teacherCards = document.querySelectorAll('#teachers .teacher-card');

teacherCards.forEach(card => {
  card.addEventListener('click', () => {
    const rawGroup = (card.getAttribute('data-group') || '').toLowerCase();
    const group = rawGroup === 'club' ? 'mentor' : rawGroup;

    // 只用 data-teacher 當查表鍵（穩定、不受顯示文字影響）
    const key = (card.getAttribute('data-teacher') || '').trim();
    const bucket = teacherData[group] || {};
    const detail = bucket[key];

    if (!detail) {
      const keys = Object.keys(bucket).join('、') || '(此群組目前沒有鍵)';
      alert(`找不到【${key}】的詳細資料。\n請確認：\n1) teacherData.${group} 是否有鍵：${key}\n2) 卡片 data-teacher 是否與鍵一致\n\n目前可用鍵：${keys}`);
      return;
    }

    // 顯示
    divisionImg.src = detail.img || '';
    divisionImg.alt = `${detail.name || key} 詳細圖片`;
    divisionText.textContent = detail.text || '';

    if (typeof window.renderTwitchButton === 'function') {
      window.renderTwitchButton(detail.twitch);
    } else {
      renderTwitchButtonLocal(detail.twitch);
    }
  });
});
















