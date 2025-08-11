 // 學院小選單切換功能
    const navLinks = document.querySelectorAll('#studentSubNav a');
    const houseSections = document.querySelectorAll('.house-students');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 移除其他 active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // 顯示對應學院，隱藏其他
            const targetHouse = link.dataset.house;
            houseSections.forEach(section => {
                section.style.display = section.id === 'house-' + targetHouse ? 'block' : 'none';
            });

            // 隱藏分業詳細頁（切換學院時）
            document.getElementById('division-detail').style.display = 'none';
        });
    });

    // 學生點擊事件 - 顯示分業詳細內容
    const divisionData = {
        holfindo: {
        '學生1': {
        img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403854695944163439/image.png?ex=68991111&is=6897bf91&hm=93e2863e01e1dd7923c7e67130b6dbaa22f16eb54f3b28482b07fdcd89e533dc&',
    text: '霍爾芬多學生1的分業詳細介紹文字，這裡可以放該學生的專長、故事或其他說明。'
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生2',
    text: '霍爾芬多學生2的分業詳細介紹內容。'
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生3',
    text: '霍爾芬多學生3的分業詳細介紹。'
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生4',
    text: '霍爾芬多學生4的分業詳細介紹。'
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生5',
    text: '霍爾芬多學生5的分業詳細介紹。'
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生6',
    text: '霍爾芬多學生6的分業詳細介紹。'
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生7',
    text: '霍爾芬多學生7的分業詳細介紹。'
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生8',
    text: '霍爾芬多學生8的分業詳細介紹。'
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生9',
    text: '霍爾芬多學生9的分業詳細介紹。'
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生10',
    text: '霍爾芬多學生10的分業詳細介紹。'
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生11',
    text: '霍爾芬多學生11的分業詳細介紹。'
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=霍爾芬多學生12',
    text: '霍爾芬多學生12的分業詳細介紹。'
    }
  },
    skmalin: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生1',
    text: '史克瑪林學生1的分業介紹文字。'
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生2',
    text: '史克瑪林學生2的分業介紹文字。'
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生3',
    text: '史克瑪林學生3的分業介紹文字。'
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生4',
    text: '史克瑪林學生4的分業介紹文字。'
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生5',
    text: '史克瑪林學生5的分業介紹文字。'
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生6',
    text: '史克瑪林學生6的分業介紹文字。'
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生7',
    text: '史克瑪林學生7的分業介紹文字。'
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生8',
    text: '史克瑪林學生8的分業介紹文字。'
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生9',
    text: '史克瑪林學生9的分業介紹文字。'
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生10',
    text: '史克瑪林學生10的分業介紹文字。'
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生11',
    text: '史克瑪林學生11的分業介紹文字。'
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=史克瑪林學生12',
    text: '史克瑪林學生12的分業介紹文字。'
    }
  },
    rowenpaf: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生1',
    text: '羅文帕夫學生1的分業詳細說明。'
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生2',
    text: '羅文帕夫學生2的分業詳細說明。'
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生3',
    text: '羅文帕夫學生3的分業詳細說明。'
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生4',
    text: '羅文帕夫學生4的分業詳細說明。'
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生5',
    text: '羅文帕夫學生5的分業詳細說明。'
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生6',
    text: '羅文帕夫學生6的分業詳細說明。'
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生7',
    text: '羅文帕夫學生7的分業詳細說明。'
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生8',
    text: '羅文帕夫學生8的分業詳細說明。'
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生9',
    text: '羅文帕夫學生9的分業詳細說明。'
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生10',
    text: '羅文帕夫學生10的分業詳細說明。'
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生11',
    text: '羅文帕夫學生11的分業詳細說明。'
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=羅文帕夫學生12',
    text: '羅文帕夫學生12的分業詳細說明。'
    }
  },
    twicklow: {
        '學生1': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生1',
    text: '特威克勞學生1的分業詳細介紹。'
    },
    '學生2': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生2',
    text: '特威克勞學生2的分業詳細介紹。'
    },
    '學生3': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生3',
    text: '特威克勞學生3的分業詳細介紹。'
    },
    '學生4': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生4',
    text: '特威克勞學生4的分業詳細介紹。'
    },
    '學生5': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生5',
    text: '特威克勞學生5的分業詳細介紹。'
    },
    '學生6': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生6',
    text: '特威克勞學生6的分業詳細介紹。'
    },
    '學生7': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生7',
    text: '特威克勞學生7的分業詳細介紹。'
    },
    '學生8': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生8',
    text: '特威克勞學生8的分業詳細介紹。'
    },
    '學生9': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生9',
    text: '特威克勞學生9的分業詳細介紹。'
    },
    '學生10': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生10',
    text: '特威克勞學生10的分業詳細介紹。'
    },
    '學生11': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生11',
    text: '特威克勞學生11的分業詳細介紹。'
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=特威克勞學生12',
    text: '特威克勞學生12的分業詳細介紹。'
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const studentListSection = document.getElementById('students-section');
    const studentSubNav = document.getElementById('studentSubNav');
    const divisionDetail = document.getElementById('division-detail');
    const divisionImg = document.getElementById('division-img');
    const divisionText = document.getElementById('division-text');

  // 學生卡點擊事件
  document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', () => {
            const student = card.dataset.student;
            const house = card.dataset.house;
            const detail = (divisionData[house] && divisionData[house][student]) || null;

            if (detail) {
                divisionImg.src = detail.img;
                divisionImg.alt = student + ' 分業圖片';
                divisionText.textContent = detail.text;

                // 顯示詳細頁，隱藏列表與選單
                divisionDetail.style.display = 'block';
                if (studentListSection) studentListSection.style.display = 'none';
                if (studentSubNav) studentSubNav.style.display = 'none';
            } else {
                alert('該學生的分業資料尚未設定。');
            }
        });
  });

  // 關閉詳細區按鈕
  document.getElementById('close-detail').addEventListener('click', () => {
        divisionDetail.style.display = 'none';
    if (studentListSection) studentListSection.style.display = 'block';
    if (studentSubNav) studentSubNav.style.display = 'flex';
  });

    // 學院小選單切換事件
    const navLinks = document.querySelectorAll('#studentSubNav a');
    const houseSections = document.querySelectorAll('.house-students');

  navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            console.log('學院切換，關閉詳細頁');

            // 移除所有 active，給點擊項加 active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetHouse = link.dataset.house;

            // 顯示對應學院區，隱藏其他
            houseSections.forEach(section => {
                section.style.display = section.id === 'house-' + targetHouse ? 'block' : 'none';
            });

            // 切換學院時關閉詳細頁，並顯示學生列表與選單
            divisionDetail.style.display = 'none';
            if (studentListSection) studentListSection.style.display = 'block';
            if (studentSubNav) studentSubNav.style.display = 'flex';
        });
  });
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

  // 初始化：綁定按鈕事件
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

    // 顯示學院內容函式
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

    // 簡單的 HTML 字串轉義
    function escapeHtml(str) {
    if (!str) return '';
    return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

// 頁面載入時顯示預設學院介紹
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
    logo.style.display = 'none';  // 入口頁不顯示LOGO
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
}

function showHomePage() {
    entryPage.style.display = 'none';
    nav.style.display = 'block';
    logo.style.display = 'block'; // 其他頁顯示LOGO
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    homeSection.classList.add('active');
}

// 頁面載入時先顯示入口頁
showEntryPage();

// LOGO 點擊回首頁
logo.addEventListener('click', function (e) {
    e.preventDefault();
    showHomePage();
});

// ENTER 按鈕進入主頁
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

    // --- 初始：設定音量、循環
    bgMusic.volume = 0.18; // 初始音量（可自行調整）
    bgMusic.loop = true;

    // 入學按鈕點擊，顯示導航及首頁，並嘗試播放音樂（因為為使用者手勢，通常瀏覽器允許）
    joinBtn.addEventListener('click', () => {
        entryPage.style.display = 'none';
        nav.style.display = 'block';
        showSection('home');

        // 嘗試播放音樂（在大多數瀏覽器中，點擊按鈕視為使用者互動，允許播放）
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

    // 音樂切換按鈕（播放/暫停）
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

    // 主導航點擊切換頁面（除了學生介紹會用特別處理）
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
        // 隱藏所有學院學生列表區
        document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');
        // 學院小選單清除active
        houseLinks.forEach(link => link.classList.remove('active'));

        if (sectionId === 'students') {
            document.getElementById('students').classList.add('active');
            // 預設顯示霍爾芬多
            setActiveHouse('holfindo');
        } else {
            const sec = document.getElementById(sectionId);
            if (sec) sec.classList.add('active');
            // 如果切換到地圖分頁，確保地圖選單第一個為 active（以利顯示）
            if (sectionId === 'map') {
                // 如果 mapContent 內沒有東西，初始化為第一個
                const firstBtn = document.querySelector('#mapSelector button.active') || document.querySelector('#mapSelector button[data-map]');
                if (firstBtn && !document.querySelector('#mapContent .map-card')) {
                    showMap(firstBtn.dataset.map);
                    document.querySelectorAll('#mapSelector button').forEach(b => b.classList.remove('active'));
                    firstBtn.classList.add('active');
                }
            }
        }
    }

    function setActiveHouse(houseKey) {
        // 隱藏所有學院學生區
        document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');
        // 顯示指定學院學生區
        const el = document.getElementById('house-' + houseKey);
        if (el) el.style.display = 'block';
        // 更新小選單 active 樣式
        houseLinks.forEach(link => {
            if (link.dataset.house === houseKey) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ----------------
    // 地圖功能：五個地點與預設圖文
    // ----------------
    const maps = {
        school: {
            title: '麥格華茲',
            desc: '麥格華茲學院座落於神秘的萊卡城，這是一座融合多種族文化與歷史的魔法都市。學院致力於培養年輕一代的魔法師，促進不同種族間的理解與合作，共同維護大陸的和平與繁榮。學院最獨特之處在於它的四個分院，每個分院代表著不同的價值觀與特質，讓學生能依照自身天賦與性格獲得最適合的指導與成長環境。透過這樣的分院制度，學生不僅能學習強大的魔法技能，更能培養出領導力、勇氣與智慧。',
            notes: '特色：傳承奧秘、多元共融、卓越教育。',
            img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403777468221100243/1.png?ex=6898c925&is=689777a5&hm=301aff9de045f9c87e1fe9af47cc749acdb99099f46ddc98b911311f67e46455&',
            alt: '麥格華茲 圖片'
        },

        dwarf: {
            title: '矮人城塞',
            desc: '矮人城塞位於高聳岩巒之中，石砌建築與鍛造作坊遍佈其間。這裡的矮人工匠擅長打造堅固盔甲與精密機械，城內常有金屬火花與悠揚的敲擊聲。來到此地，旅者會被深厚的歷史感與工藝魅力所吸引。',
            notes: '特色：地下鍛造坊、堅固城牆、古老礦道。',
            img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403777468221100243/1.png?ex=6898c925&is=689777a5&hm=301aff9de045f9c87e1fe9af47cc749acdb99099f46ddc98b911311f67e46455&',
            alt: '矮人城塞 圖片'
        },
        kingdom: {
            title: '另一個王國',
            desc: '另一個王國地處綠意平原與蜿蜒河川之間，王都城堡雄偉，人民以農耕與騎士文化聞名。城內市場熱鬧非凡，各式手工藝與特產林立，是旅行者補給的好去處。',
            notes: '特色：王都、市集、豐富文化遺產。',
            img: 'https://cdn.discordapp.com/attachments/843799477360918549/1403777611376889958/20250224002416.png?ex=6898c947&is=689777c7&hm=a4b2ee088b69dc72a84ec55f0dcb046c3936fde458baec744ff8fd2e98f44bf3&',
            alt: '另一個王國 圖片'
        },
        sakura: {
            title: '櫻花城',
            desc: '櫻花城以滿山的櫻花聞名，春季時整座城猶如粉色海洋。城中的古寺和茶屋保存了細緻的禮儀與傳統，吸引詩人與畫家長期駐足創作。',
            notes: '特色：櫻花大道、古寺、季節祭典。',
            img: 'https://media.discordapp.net/attachments/843799477360918549/1403777635208794206/125075.png?ex=6898c94d&is=689777cd&hm=683238c0137e29c40f56062a9e3deb37715bbcda569924883cfab207be34b806&=&format=webp&quality=lossless',
            alt: '櫻花城 圖片'
        },
        elves: {
            title: '精靈城邦',
            desc: '精靈城邦隱匿於古老森林的樹冠之上，以輕盈優雅的建築和自然魔法融合為特色。精靈們與自然和諧共處，擅長治癒與自然魔法，是求學與靈性修養的理想之地。',
            notes: '特色：樹屋建築、自然魔法、長生傳說。',
            img: 'https://media.discordapp.net/attachments/843799477360918549/1403777687918608484/E69CAAE591BDE5908DE8A8ADE8A888-9-809x455.png?ex=6898c959&is=689777d9&hm=f99b9f4ea814520a4a75748edb146a71a5384ae3f8202d90c2e2b99413ee9519&=&format=webp&quality=lossless',
            alt: '精靈城邦 圖片'
        },
        snow: {
            title: '雪地野人國',
            desc: '雪地野人國延伸在極寒的雪原上，居民以狩獵與生存技巧聞名。此地嚴寒且充滿挑戰，唯有堅毅的旅者方能踏足，能見到壯闊的極光與冰雕奇景。',
            notes: '特色：雪原、野外生存、極光景致。',
            img: 'https://media.discordapp.net/attachments/843799477360918549/1403777719208116325/1713167210868-dec1698822064f5b8d7a6c3350cb31a1-800x542.png?ex=6898c961&is=689777e1&hm=ca2b84fda010178382576ae3a1c51314994adf2970bf16b0f1a59d7c54b2b051&=&format=webp&quality=lossless',
            alt: '雪地野人國 圖片'
        }
    };

    const mapSelector = document.getElementById('mapSelector');
    const mapContent = document.getElementById('mapContent');

    // 初始化：綁定選單按鈕
    mapSelector.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const key = btn.dataset.map;
            // 樣式
            mapSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // 顯示地圖內容
            showMap(key);
        });
    });

    // 顯示地圖函式：注入 mapContent
    function showMap(key) {
        const m = maps[key];
        if (!m) {
            mapContent.innerHTML = '<p style="color:#d6c98b;">尚未設定此地圖內容。</p>';
            return;
        }
        // 建議：文字放在左側，圖片放右側（符合要求）
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

    // 輔助：避免簡單的 HTML 注入（把資料轉義）
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // 頁面初始：若使用者已按入學會顯示 nav（也可手動呼叫 showSection('home')）
    // 預設不顯示任何 section，直到入學為止。
});
