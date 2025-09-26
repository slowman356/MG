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
  text: '霍爾芬多學生的分業詳細介紹文字...',
  twitch: 'https://www.twitch.tv/your_channel' // 👈 新增（可選）
},

    '學生2': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生2',
    text: '霍爾芬多學生的分業詳細介紹內容。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生3',
    text: '霍爾芬多學生的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生4',
    text: '霍爾芬多學生4的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生5',
    text: '霍爾芬多學生5的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生6',
    text: '霍爾芬多學生6的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生7',
    text: '霍爾芬多學生7的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生8',
    text: '霍爾芬多學生8的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生9',
    text: '霍爾芬多學生9的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生10',
    text: '霍爾芬多學生10的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生11',
    text: '霍爾芬多學生11的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生12',
    text: '霍爾芬多學生12的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    skmalin: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生1',
    text: '史克瑪林學生1的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生2',
    text: '史克瑪林學生2的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生3',
    text: '史克瑪林學生3的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生4',
    text: '史克瑪林學生4的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生5',
    text: '史克瑪林學生5的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生6',
    text: '史克瑪林學生6的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生7',
    text: '史克瑪林學生7的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生8',
    text: '史克瑪林學生8的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生9',
    text: '史克瑪林學生9的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生10',
    text: '史克瑪林學生10的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生11',
    text: '史克瑪林學生11的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生12',
    text: '史克瑪林學生12的分業介紹文字。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    rowenpaf: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生1',
    text: '羅文帕夫學生1的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生2',
    text: '羅文帕夫學生2的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生3',
    text: '羅文帕夫學生3的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生4',
    text: '羅文帕夫學生4的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生5',
    text: '羅文帕夫學生5的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生6',
    text: '羅文帕夫學生6的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生7',
    text: '羅文帕夫學生7的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生8',
    text: '羅文帕夫學生8的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生9',
    text: '羅文帕夫學生9的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生10',
    text: '羅文帕夫學生10的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生11',
    text: '羅文帕夫學生11的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生12',
    text: '羅文帕夫學生12的分業詳細說明。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    }
  },
    twicklow: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生1',
    text: '特威克勞學生1的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生2',
    text: '特威克勞學生2的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生3',
    text: '特威克勞學生3的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生4',
    text: '特威克勞學生4的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生5',
    text: '特威克勞學生5的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生6',
    text: '特威克勞學生6的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生7',
    text: '特威克勞學生7的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生8',
    text: '特威克勞學生8的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生9',
    text: '特威克勞學生9的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生10',
    text: '特威克勞學生10的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生11',
    text: '特威克勞學生11的分業詳細介紹。',
	twitch: 'https://www.twitch.tv/mobilmobil' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生12',
    text: '特威克勞學生12的分業詳細介紹。',
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
    // 可選：清空舊內容
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
    desc: '霍爾芬多學院以勇氣、膽識與騎士精神聞名。這裡的學生崇尚冒險與正義，常常勇於面對挑戰。學院徽章是一頭獅子，象徵著無畏與領導力。',
    notes: '特色：勇氣、冒險、領導力。',
    img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403777468221100243/1.png',
    alt: '霍爾芬多 學院徽章'
    },
    hufflepuff: {
        title: '羅文帕夫',
    desc: '羅文帕夫學院以忠誠、勤奮與誠實著稱。這裡的學生友善且勤勞，重視團隊精神與公平。學院徽章是一隻獾，象徵努力與正直。',
    notes: '特色：忠誠、勤奮、公平。',
    img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403777611376889958/20250224002416.png',
    alt: '羅文帕夫 學院徽章'
    },
    ravenclaw: {
        title: '特威克勞',
    desc: '特威克勞學院以智慧、學術與創造力著稱。學生重視思考與求知，善於解決問題與提出新穎觀點。學院徽章是一隻鷹，象徵智慧與自由。',
    notes: '特色：智慧、學術、創造力。',
    img: 'https://media.discordapp.net/attachments/843799477360918549/1403777635208794206/125075.png',
    alt: '特威克勞 學院徽章'
    },
    slytherin: {
        title: '史克瑪林',
    desc: '史克瑪林學院以野心、狡猾與領導力聞名。這裡的學生充滿決心，善於策略與自我提升。學院徽章是一條蛇，象徵智慧與謀略。',
    notes: '特色：野心、狡猾、領導力。',
    img: 'https://media.discordapp.net/attachments/843799477360918549/1403777687918608484/E69CAAE591BDE5908DE8A8ADE8A888-9-809x455.png',
    alt: '史克瑪林 學院徽章'
    }
  };

    const academySelector = document.getElementById('academySelector');
    const academyContent = document.getElementById('academyContent');

  // 綁定按鈕事件
  academySelector.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.academy;

            // 切換按鈕樣式
            academySelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 顯示學院介紹
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
            // 若被瀏覽器阻擋，顯示可手動啟動的提示（但不打擾）
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
        // 預設就是麥格華茲
        showMap('school');

        // 同步按鈕 active 樣式
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
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/1%2FBLUE.png?alt=media&token=64dc8859-9bb0-431b-bfff-3e802f6b9a63',
            alt: '麥格華茲 圖片'
        },

        dwarf: {
            title: '矮人城塞',
            desc: '矮人城塞位於高聳岩巒之中，石砌建築與鍛造作坊遍佈其間。這裡的矮人工匠擅長打造堅固盔甲與精密機械，城內常有金屬火花與悠揚的敲擊聲。來到此地，旅者會被深厚的歷史感與工藝魅力所吸引。',
            notes: '特色：地下鍛造坊、堅固城牆、古老礦道。',
            img: 'https://i.ytimg.com/vi/ldAjxdiAflk/maxresdefault.jpg',
            alt: '矮人城塞 圖片'
        },
		
        sakura: {
            title: '櫻花城',
            desc: '櫻花城以滿山的櫻花聞名，春季時整座城猶如粉色海洋。城中的古寺和茶屋保存了細緻的禮儀與傳統，吸引詩人與畫家長期駐足創作。',
            notes: '特色：櫻花大道、古寺、季節祭典。',
            img: 'https://i.pinimg.com/originals/7a/6f/98/7a6f988f75514b5e97efc7affde9eb76.jpg',
            alt: '櫻花城 圖片'
        },
        elves: {
            title: '精靈城邦',
            desc: '精靈城邦隱匿於古老森林的樹冠之上，以輕盈優雅的建築和自然魔法融合為特色。精靈們與自然和諧共處，擅長治癒與自然魔法，是求學與靈性修養的理想之地。',
            notes: '特色：樹屋建築、自然魔法、長生傳說。',
            img: 'https://static.planetminecraft.com/files/image/minecraft/project/2024/480/17921699-cropped_l.webp',
            alt: '精靈城邦 圖片'
        },
        snow: {
            title: '希臘城',
            desc: '希臘城依山傍海而建，白色大理石殿堂與藍頂圓塔林立，宛如眾神居所。街道間遍布石柱與壁畫，記錄著古老神話與英雄傳說。旅者能在此感受到濃厚的文化底蘊與神聖氛圍。',
            notes: '神殿建築、神話傳說、英雄紀念碑。',
            img: 'https://cdn.imweb.me/thumbnail/20230501/88906a0bb6c19.png',
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



