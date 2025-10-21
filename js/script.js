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
  img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
  text: `
 未註冊
【扮演者】Peggy
`,
  twitch: 'https://www.twitch.tv/peggy_030' 
},

    '學生2': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】丹丹丹尼
`,
	twitch: 'https://www.twitch.tv/dandanny1026' 
    },
    '學生3': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】水天酋長
`,
	twitch: 'https://www.twitch.tv/waterday0930' 
    },
    '學生4': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】老婆
`,
	twitch: 'https://www.twitch.tv/s73225200' 
    },
    '學生5': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】鋪許
`,
	twitch: 'https://www.twitch.tv/pushxrp' 
    },
    '學生6': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】RVin
`,
	twitch: 'https://www.twitch.tv/r_vin310' 
    },
    '學生7': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】柳丁丁丁
`,
	twitch: 'https://www.twitch.tv/mama0321' 
    },
    '學生8': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】流傳派
`,
	twitch: 'https://www.twitch.tv/zweizz' 
    },
    '學生9': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】ㄚ布丁丁
`,
	twitch: 'https://www.twitch.tv/hipudding1223' 
    },
    '學生10': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】俊俏王
`,
	twitch: 'https://www.twitch.tv/join90328' 
    },
    '學生11': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】Ume
`,
	twitch: 'https://www.twitch.tv/ume_zz' 
    },
    '學生12': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】可口奶凍
`,
	twitch: 'https://www.twitch.tv/yoyo30108' 
    }
  },
    skmalin: {
        '學生1': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】羽落
`,
	twitch: 'https://www.twitch.tv/yulo1025' 
    },
    '學生2': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】永發
`,
	twitch: 'https://www.twitch.tv/yongfafa' 
    },
    '學生3': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】五十鈴抹茶糰子
`,
	twitch: 'https://www.twitch.tv/isuzumaccha' 
    },
    '學生4': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】貓白
`,
	twitch: 'https://www.twitch.tv/nekoa_o' 
    },
    '學生5': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】唯唯兒
`,
	twitch: 'https://www.twitch.tv/kazehaya_yui' 
    },
    '學生6': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】襪子わつ
`,
	twitch: 'https://www.twitch.tv/zerowatu' 
    },
    '學生7': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】裘嗨嗨
`,
	twitch: 'https://www.twitch.tv/iamnivea' 
    },
    '學生8': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】歐練
`,
	twitch: 'https://www.twitch.tv/olan300' 
    },
    '學生9': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】振宇
`,
	twitch: 'https://www.twitch.tv/da0aaa' 
    },
    '學生10': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】諾櫻
`,
	twitch: 'https://www.twitch.tv/re_noe_' 
    },
    '學生11': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】梅林
`,
	twitch: 'https://www.twitch.tv/mer1ins' 
    },
    '學生12': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】阡狐
`,
	twitch: 'https://www.twitch.tv/senkitsune_huni' 
    }
  },
    rowenpaf: {
        '學生1': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】易閒
`,
	twitch: 'https://www.twitch.tv/yiknower0102' 
    },
    '學生2': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】夜某
`,
	twitch: 'https://www.twitch.tv/yamouo' 
    },
    '學生3': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】嘎旋
`,
	twitch: 'https://www.twitch.tv/shen_0828' 
    },
    '學生4': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】Misuzu
`,
	twitch: 'https://www.twitch.tv/misuzu0x0' 
    },
    '學生5': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】小丞丞
`,
	twitch: 'https://www.twitch.tv/cheng_1210' 
    },
    '學生6': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】秋澤恭介
`,
	twitch: 'https://www.twitch.tv/akizkke0328' 
    },
    '學生7': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】源犬太
`,
	twitch: 'https://www.twitch.tv/minamoto__kenta' 
    },
    '學生8': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】Shoyu
`,
	twitch: 'https://www.twitch.tv/shoyu0526' 
    },
    '學生9': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】猫羽うみ
`,
	twitch: 'https://www.twitch.tv/umii_u' 
    },
    '學生10': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】沐沐菟栮
`,
	twitch: 'https://www.twitch.tv/mutuer' 
    },
    '學生11': {
        img: 'hhttps://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】伊德海拉
`,
	twitch: 'https://www.twitch.tv/yidhra0727' 
    },
    '學生12': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】馬魯
`,
	twitch: 'https://www.twitch.tv/anninmaru0402' 
    }
  },
    twicklow: {
        '學生1': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】罐罐
`,
	twitch: 'https://www.twitch.tv/can1021' 
    },
    '學生2': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】我大歪頭
`,
	twitch: 'https://www.twitch.tv/waitou1117' 
    },
    '學生3': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】轉蛋姬
`,
	twitch: 'https://www.twitch.tv/homete416' 
    },
    '學生4': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】鴨鴨二
`,
	twitch: 'https://www.twitch.tv/yaya6315341' 
    },
    '學生5': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】補路
`,
	twitch: 'https://www.twitch.tv/blue_kao' 
    },
    '學生6': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】魯波 Lupo
`,
	twitch: 'https://www.twitch.tv/lupo_relive' 
    },
    '學生7': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】來希
`,
	twitch: 'https://www.twitch.tv/raiki_raibao' 
    },
    '學生8': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】踏雪嗚哇
`,
	twitch: 'https://www.twitch.tv/sunohamster' 
    },
    '學生9': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】捏波絲姬
`,
	twitch: 'https://www.twitch.tv/neboskey' 
    },
    '學生10': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20F.png?alt=media&token=109a784c-0ed9-489b-b3d5-765b41a3e05f',
    text: `
【未登記學生資料】
【扮演者】踢踢
`,
	twitch: 'https://www.twitch.tv/ttspoon' 
    },
    '學生11': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20M.png?alt=media&token=0ff85749-aca1-4460-b989-d3757417ef38',
    text: `
【未登記學生資料】
【扮演者】
`,
	twitch: '' 
    },
    '學生12': {
        img: 'https://via.placeholder.com/150?text=特威克羅學生12',
    text: `
【未登記學生資料】
【扮演者】
`,
	twitch: '' 
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
        showMap('aldrun');


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
		 aldrun: {
            title: '奧德倫王國',
            desc: '奧德倫以魔法與奧術傳統並立而聞名於世。自建國以來，魔導學識便被視為貴族修養與王權象徵，每位王室成員皆受嚴格的法術教育，以確保血脈中流動的，不僅是統治的權威，更是「秩序與光」的祝福。王族視自己為「光之代言人」，肩負維持世界平衡與驅逐黑暗之責。',
            notes: '特色：傳承奧秘、多元共融、卓越教育。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FKG.png?alt=media&token=424aff46-5fee-4966-b9ad-1f5ae068f2eb',
            alt: '奧德倫王國 圖片'
        },
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
            title: '聖塔瑞斯城',
            desc: '聖塔瑞斯城依山傍海而建，白色大理石殿堂與橘頂圓塔林立，宛如眾神居所。街道間遍布石柱與壁畫，記錄著古老神話與英雄傳說。旅者能在此感受到濃厚的文化底蘊與神聖氛圍。',
            notes: '神殿建築、神話傳說、英雄紀念碑。',
            img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/map%2FGreece.png?alt=media&token=2e93d562-1355-480c-90e1-a18d9091c261',
            alt: '聖塔瑞斯城 圖片'
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


const eras = {
  primordial: {
    title: '太初紀元',
    desc: ' 世界初開，七大元素自虛空誕生。 獸人首先踏上大地，成為自然原力的化身。 山川開始流動，風與火首次交織，艾斯瑞達迎來最原始的生命之歌。',
    notes: '創世、古誓。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E5%A4%AA%E5%88%9D%E7%B4%80%E5%85%83_768x768.png?alt=media&token=b91c713b-643b-40f1-8320-ef3ed6f43af5',
    alt: '太初紀元 圖像'
  },
  ironfire: {
    title: '鐵與火之紀元',
    desc: '精靈、矮人與龍族的黃金時代。 山嶺中響起工坊的鐵擊聲，而天空之上，龍族以烈焰劃出古代榮光的軌跡。 這是一個力量與技藝共存的年代——被稱為「鍛造之世」。',
    notes: '鍛造、城塞、盟約。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E9%90%B5%E8%88%87%E7%81%AB.png?alt=media&token=73cd4b2d-c6c3-40d3-b3e1-b3470c0fc7d4',
    alt: '鐵與火之紀元 圖像'
  },
  sea_man: {
    title: '海與人之紀元',
    desc: '人類崛起的時代。他們乘著風帆穿越海洋，建立王國與信仰，並創立第一批魔法學院，使知識成為力量的新象徵。宗教與學術並行，世界的秩序開始以「理性」而非「血統」為核心重構。',
    notes: '航海、星圖、學院。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E6%B5%B7%E8%88%87%E4%BA%BA.png?alt=media&token=7b662b24-6fd8-4bdf-a3f4-3d592ab39138',
    alt: '海與人之紀元 圖像'
  },
  dark: {
    title: '黑暗紀元',
    desc: '地獄之門被打開，惡魔族降臨大地。魔王薩爾格洛斯率領魔族大軍席捲世界，精靈森林化為焦土，矮人城塞被烈焰吞噬，龍族幾近滅絕，野獸族被迫流亡荒原。長達五百年的戰火將文明推向崩潰，世界陷入永夜與絕望之中。',
    notes: '禁忌、魔族、戰爭。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E9%BB%91%E6%9A%97.png?alt=media&token=0625625f-4251-49b6-89ec-e560b3b1ca1d',
    alt: '黑暗紀元 圖像'
  },
  darkend: {
    title: '黑暗紀元的浩劫',
    desc: ' 在黑暗紀元4497年， 創世三主神降臨凡界，聯合最後的人類、精靈與矮人聯軍，於「靈魂荒原」展開最終決戰。魔王的咆哮吞噬天際，而神之光撕裂了永夜。 最終，薩爾格洛斯被擊殺，靈魂四分五裂，封印於四件聖物之中。此戰後，大陸陷入漫長的沉眠期。 種族凋零，知識失傳，唯有學院的火焰仍微弱閃爍。',
    notes: '戰爭結束、封印、勝利。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E9%BB%91%E6%9A%97%E6%9C%AB.png?alt=media&token=64f8cfc8-4331-407c-baf5-e887c735577e',
    alt: '黑暗紀元 圖像'
  },
  rebirth: {
    title: '新生紀元',
    desc: ' 三主神修復世界秩序，封印地獄之門。倖存的種族開始重建家園，麥格華茲魔法學院在廢墟中再度點燃知識之火。 新生紀元象徵著和平與重生，但陰影仍潛伏於大地的縫隙之間—— 魔族殘黨、純血家族與禁忌魔法的低語， 正悄然醞釀新的風暴。',
    notes: '重建、聯盟、新生。',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E6%96%B0%E7%94%9F.png?alt=media&token=4dcb19f1-10e0-4d9c-b729-dc2778f74426',
    alt: '新生紀元 圖像'
  }
};


const eraSelector = document.getElementById('eraSelector');
const eraContent  = document.getElementById('eraContent');

function renderEra(key) {
  const e = eras[key];
  if (!e) return;

  eraContent.innerHTML = `
    <div class="map-card">
      <div class="map-text">
        <h2>${e.title}</h2>
        <p>${e.desc}</p>
        <p><strong>重點：</strong>${e.notes}</p>
      </div>
      <div class="map-image">
        <img src="${e.img}" alt="${e.alt}">
      </div>
    </div>
  `;
}


if (eraSelector) {
  eraSelector.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-era]');
    if (!btn) return;
    [...eraSelector.querySelectorAll('button')].forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEra(btn.dataset.era);
  });
}


renderEra('primordial');

const gods = {
  astrion: {
    title: '光明主神・奧爾菲恩（Orpheon）',
    desc: ' 祂的光明是萬物的起始，賜予靈魂與希望。祂曾以神火燃盡魔王的肉身，使大地重獲新生。 信徒多為聖職者與治癒系魔導師。',
    domains: '生命、重生',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2FOrpheon.png?alt=media&token=02997bd5-1f77-4226-935f-07662463fd8c',
    alt: '光照群山的湖面'
  },
  noctalis: {
    title: '黑暗主神・納斐爾（Naphiel）',
    desc: '祂是靈魂歸途的守望者，審視生者之罪與亡者之願。 在魔王死後，納斐爾將其靈魂粉碎，使其永不得輪迴。 祂的信仰象徵平衡，而非邪惡。',
    domains: '死亡與審判',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2FNaphiel.png?alt=media&token=cbf9ad6e-6cc6-45ad-bb0d-df313a42c2e2',
    alt: '星空與夜色'
  },
  aetherion: {
    title: '時間之主・伊多斯（Idoth）',
    desc: '祂是世界規律的織者，讓時間、命運與魔力流轉不息。 在終極之戰中，祂以時光鎖鏈封印魔族之門，使世界再次歸於穩定。所有關於魔法理論與智慧之書，皆以祂為源。',
    domains: '秩序與循環',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2FIdoth.png?alt=media&token=6a409617-3c0b-40de-aa6b-f75f79aee17e',
    alt: '金色晨光中的森林'
  }
};


function renderGod(key) {
  const data = gods[key];
  if (!data) return;

  const html = `
    <div class="god-card">
      <div class="god-text">
        <h2>${data.title}</h2>
        <p>${data.desc}</p>
        <p><strong>領域：</strong>${data.domains}</p>
      </div>
      <div class="god-image">
        <img src="${data.img}" alt="${data.alt}">
      </div>
    </div>
  `;
  document.getElementById('godContent').innerHTML = html;
}


(function setupGodUI(){
  const selector = document.getElementById('godSelector');
  if (!selector) return;

  selector.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-god]');
    if (!btn) return;

  
    selector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderGod(btn.dataset.god);
  });

  // 預設
  renderGod('astrion');
})();

// ====== 宗教資料 ======
const religionData = {
  astrion: {
    title: '曙光聖環教',
    desc: '信奉光明主神。 主張「魔力即神恩，光明即秩序」。 信徒以魔法祈禱維持和平與救贖。 教團設有審光院與聖環騎士團，負責審查黑魔法與異端。「唯有被光照亮的知識，才值得傳承。」',
    domain: '秩序、誓約、循環',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E5%B1%AC%E5%85%89.png?alt=media&token=6a550949-8630-47d2-a360-1aeaec2a4d56',
    alt: '聖光灑落的大地'
  },
  noctalis: {
    title: '灰月秘儀會（',
    desc: '信奉黑暗主神。 主張「黑暗是光的回聲，死亡是生命的延續」。 儀式於月蝕之夜舉行，以血墨繪製月之符文，召喚亡靈對話。 其信徒多為靈魂法師與夜行者。「光能照亮世界，但唯有影子，能讓世界有形。」',
    domain: '夢境、影、憐憫',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E7%81%B0%E9%BB%91.png?alt=media&token=a80b9442-1569-4be7-9c4b-ca1187cbc437',
    alt: '星空下的靜夜'
  }
};


function renderReligion(godKey) {
  const g = religionData[godKey];
  if (!g) return;
  document.getElementById('religionContent').innerHTML = `
    <div class="religion-card">
      <div class="religion-text">
        <h2>${g.title}</h2>
        <p>${g.desc}</p>
        <p><strong>領域：</strong>${g.domain}</p>
      </div>
      <div class="religion-image">
        <img src="${g.img}" alt="${g.alt}">
      </div>
    </div>`;
}


(function setupReligionUI(){
  const selector = document.getElementById('religionSelector');
  if (!selector) return;

  selector.addEventListener('click', e => {
    const btn = e.target.closest('button[data-god]');
    if (!btn) return;

    selector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderReligion(btn.dataset.god);
  });


  renderReligion('astrion');
})();
// ====== 種族資料 ======
const racesData = {
  human: {
    title: '人類（Human）',
    desc: '人類被視為最具變化性的種族，既能墮落也能超越。他們擁有強烈的好奇心與適應力，文明遍布世界各地他們不像精靈擁有永恆的壽命，也不像矮人擁有天生的力量，但正因如此，人類的生命如火般短促卻璀璨。人類歷史是戰爭與重建的循環。他們建立王國、締結聯盟，又因權力與信仰而互相爭戰。',
    trait: '適應力、野心、多元文化',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E4%BA%BA%E9%A1%9E.png?alt=media&token=22c2ea7c-16cf-4d77-8bac-22a98d303ec7',
    alt: '人類城市'
  },
  elf: {
    title: '精靈（Elf）',
    desc: '精靈，乃星之後裔、光之子民。他們自遠古的「黎明之森」誕生，以優雅的容貌、長久的壽命與天賦魔力聞名於世。精靈之血被視為世界樹的延續，每一滴都流淌著自然與魔力的純粹共鳴。他們居於遠離凡塵的森域之都，以詩、魔法與禮制構築文明。精靈族群高度重視血統純淨與靈魂傳承。',
    trait: '魔力親和、優雅、長壽',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2Felf.png?alt=media&token=efe88dd3-831d-4379-9891-e2db7ecc8f39',
    alt: '精靈森林'
  },
  dwarf: {
    title: '矮人（Dwarf）',
    desc: '鑄造與堡壘的宗師，火與土的子嗣。他們是符文與鍛造的守護者，擁有無與倫比的耐性與手工技藝。矮人誕生於大地最深處的火脈之中，傳說最初由地母神以岩石與火焰所塑，賦予他們堅韌的軀體與永不熄滅的創造之心。他們的血液流淌著熔金與鐵砂，心臟如同熔爐般炙熱。他們的城市建於山腹之中，層層巨廊、火光長明，每一根石柱與鐵門上都刻滿古老符文，象徵不滅的榮耀與家族血脈。',
    trait: '鍛造、韌性、工藝文明',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E7%9F%AE%E4%BA%BA.png?alt=media&token=365ae3bd-ad79-44d4-8736-916346c019f3',
    alt: '矮人堡壘'
  },
  orc: {
    title: '魔族（Demon）',
    desc: '黑暗意志、原初詛咒與混沌能量凝聚而成的高等種族。他們不以生命繁衍，而以靈魂吞噬、契印與腐化儀式延續血脈。他們的身軀由魔能構成，可化為人形、獸形，或煙霧與影焰。每一位魔族皆以「真名（True Name）」為核心，真名即靈魂之印，失去它便形體崩解、意志消散。魔族的「血脈」並非由繁衍而生，而是經由契印與吞噬。他們能以儀式吸收他者靈魂，將其本質融入自身。',
    trait: '力量、血統、階級',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E9%AD%94%E6%97%8F.png?alt=media&token=ed7e1daa-f512-47f7-8415-a177405d283c',
    alt: '半獸族部落'
  },
  beastkin: {
    title: '獸裔（Beastkin）',
    desc: '融合自然靈與獸之血的原生種。他們以強大的感知與身體能力著稱，並擁有「原始魔法（Primal Magic）」的直覺天賦。傳說他們是自然之靈與遠古巨獸的後裔，血液中流淌著純粹的生命力與靈脈共鳴。對獸裔而言，世界並非冷漠的土地，而是一個會呼吸、會傾聽的整體。他們與自然共生，不崇拜神，而崇敬「原始意志（Primal Will）」那股連結風、火、水、獸與生命的古老力量。',
    trait: '敏捷、本能、自然共鳴',
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E9%87%8E%E7%8D%B8.png?alt=media&token=d142c7a5-7dbb-48d0-8a39-d1fbca2e8990',
    alt: '獸裔領地'
  }
};


function renderRace(rKey) {
  const r = racesData[rKey];
  if (!r) return;
  document.getElementById('racesContent').innerHTML = `
    <div class="races-card">
      <div class="races-text">
        <h2>${r.title}</h2>
        <p>${r.desc}</p>
        <p><strong>特性：</strong>${r.trait}</p>
      </div>
      <div class="races-image">
        <img src="${r.img}" alt="${r.alt}">
      </div>
    </div>`;
}


(function setupRacesUI(){
  const selector = document.getElementById('racesSelector');
  if (!selector) return;

  selector.addEventListener('click', e => {
    const btn = e.target.closest('button[data-race]');
    if (!btn) return;
    selector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRace(btn.dataset.race);
  });


  renderRace('elf');
})();

/* ===========================
  
   =========================== */
(function () {
  const teacherData = {
  professor: {
    seruphi: {
      name: '賽露菲', 
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FSeruphi%202.png?alt=media&token=788261e3-799a-425c-85c3-1473f5bd8feb',
      text: `
【角色】賽露菲（Seruphi）
【種族】精靈  
【年齡】外表約20~30歲左右（實際年齡未知）  
【個性】活潑、待人溫柔，臉上總是掛著淡淡的微笑， 卻隱約散發一絲悲傷。  
【能力】神聖魔法
【領域】艾斯瑞達大陸古文明  
【扮演者】小內
      `,

      twitch: 'https://www.twitch.tv/nerukozwz'
    },
	   minasVeya: { 
        name: '米納斯·薇婭',
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMinas%20Veya.png?alt=media&token=108659f6-c445-4eb6-97f6-95a1d900f7ff',
        text: `
【角色】米納斯·薇婭（Minas Veya）
【種族】精靈  
【年齡】外表約25歲上下  
【個性】溫柔理性，對學生總是語調平和、耐心十足，但絕不縱容欺騙行為。  
【能力】變形學、化獸術、高階守護魔法  
【扮演者】巴哥
        `,
        twitch: 'https://www.twitch.tv/pug_tw'
      },
      '大衛．羅曼': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FDavid.png?alt=media&token=231081e4-6cce-4727-adfc-cab79a28a22e',
        text: `
【角色】大衛．羅曼（David Roman）
【種族】人類  
【年齡】54歲
【個性】冷靜、嚴肅、孤僻、極具自制力。  
【能力】魔藥天賦  
【扮演者】早八都有到
        `,
        twitch: 'https://www.twitch.tv/jack385196'
    },
	
	 '西追 普萊特': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FPlight.png?alt=media&token=eb31ea1a-5099-45be-988b-6be36d2bd3e9',
        text: `
【角色】西追 普萊特 
【種族】人類 
【年齡】30歲 
【個性】語氣柔和、待人謙遜，不喜歡爭辯，更不以權威壓人
【能力】武鬥學、魔法治療學、防禦變形術 
【扮演者】 緩而 
  `,
  twitch: 'https://www.twitch.tv/cheese_prime_ham'
},
	
	

  '優莉安娜・貝娜': {
  name: '優莉安娜・貝娜',
  img: '', 
  text: `
【角色】優莉安娜・貝娜（Yuliana Bena）
【種族】四分之一薇拉血統的女巫  
【年齡】  
【個性】冷靜理智，內斂而溫柔，擅於觀察。  
【能力】水系魔法、魔藥學、占卜學  
【扮演者】-U-U-
  `,
  twitch: 'https://www.twitch.tv/loveuu_uu' 
  }
},







    mentor: {
      '社團老師': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FAiden%20Wesley.png?alt=media&token=dbfbdb57-e154-4880-a085-f0a7d49cc289',
        text: `
【角色】艾登·衛斯理（Aiden Wesley）
【種族】人類 （混血巫師 ）
【年齡】31歲  
【個性】溫柔且穩定、內向但堅定、高共感、低攻擊性、不爭主導權  
【能力】專精【魔法生物飼育學】與【防禦魔法實作】
【扮演者】櫻花

      `,
        twitch: 'https://www.twitch.tv/sakura_ryoshin'
    },

  '社團導師一': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FLumiah.png?alt=media&token=58c5a0dc-a7e1-465c-a961-a1e4db7e97ce',
    text: `
【角色】露米婭・艾爾瑟芙（Lumiah Elserf）
【種族】半精靈
【年齡】26歲（實際年齡700-800歲左右）
【個性】甜美、活潑、開朗，喜歡照顧他人
【能力】魔法增幅、微光魔法
【扮演者】阿曼
    `,
    twitch: ''
  },

  '社團導師三': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FAsmode.png?alt=media&token=4cccf66f-ac8b-4727-ab31-2b3a5fcbeb88',
    text: `
【角色】阿斯莫德（Asmode）
【種族】惡魔
【年齡】不詳(看起來40~50歲，喜歡喬裝人類)
【職位】宿管
【個性】溫柔，但極具操控慾與誘惑性，討厭戀愛，因為母胎單身。
【能力】黑魔法、心像魔法。
【扮演者】龍蝦
`,
    twitch: ''
  },
  '社團導師四': { 
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20T.png?alt=media&token=de39f27e-f9e7-4d41-9b6e-88861fd5655e',
    text: `
【角色】?
【種族】?
【年齡】?
【職位】?
【個性】?
【能力】?
【扮演者】?
`,
    twitch: ''
  },

  '社團導師二': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FFloa%20Fenrir.png?alt=media&token=2fddfc3a-53cb-4afa-a771-813169a1ff7c',
    text: `
【角色】芙洛‧芬里爾(Floa Fenrir)
【種族】狼人
【年齡】28歲
【個性】表面沉靜、禮貌，真誠傾聽
【能力】魔藥學
    `,
    twitch: 'https://www.twitch.tv/chichi5118'
  }
},
	 // 學院領導層（leader）
   leader: {
      '校長': {
        img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/god%2F%E6%A0%A1%E9%95%B7.png?alt=media&token=b78df672-a9b4-4391-9a36-e720ab7a2884',
        text: `
【角色】阿布斯．鄧不利朵
【種族】人類
【年齡】（未知年齡）
【職位】麥格華茲魔法學院 校長
【個性】嘮叨、熱情、老謀深算。
【能力】深不可測。
【扮演者】賈巴
`,
        twitch: ''
      },
      '副校長': {
  img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F123.png?alt=media&token=e6e45e2d-ab8e-4237-a268-e30c719053b9',
  text: `
【角色】利維坦・艾爾瑟芙 (Leviathan Elserf)
【種族】惡魔
【年齡】外表約22左右（未知年齡）
【職位】麥格華茲魔法學院 副校長
【個性】傲慢毒舌、理智冷靜，嘴壞。
【能力】精通猩紅魔法、詛咒，魔力感知夜間異動。
【扮演者】Nokia	
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
【職位】餐廳
【個性】傲嬌又認真，對料理與植物都極度講究，嘴硬但心軟。
【能力】詛咒的黑暗魔法。
【扮演者】咬耳多
`,
    twitch: 'https://www.twitch.tv/medic'
  },
  
   '宿管': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FAsmode.png?alt=media&token=4cccf66f-ac8b-4727-ab31-2b3a5fcbeb88',
    text: `
【角色】阿斯莫德（Asmode）
【種族】惡魔
【年齡】不詳(看起來40~50歲，喜歡喬裝人類)
【職位】宿管
【個性】溫柔，但極具操控慾與誘惑性，討厭戀愛，因為母胎單身。
【能力】黑魔法、心像魔法。
【扮演者】龍蝦
`,
    twitch: 'https://www.twitch.tv/hedfu'
  },
  '警衛': { 
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FLissandra.png?alt=media&token=e1bdc8ef-fdba-4553-99d0-8053cfd006f1',
    text: `
【角色】美．麗珊卓（Lissandra）
【種族】獸人
【年齡】不詳
【職位】警衛
【個性】陰陽怪氣、熱心助人、心直口快。
【能力】黑魔法
【扮演者】撒旦先生
`,
    twitch: 'https://www.twitch.tv/mrsatan717'
  },
  '侍僕': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FIris%20Nova.png?alt=media&token=cf75709d-4073-4e8e-8d53-79dd65d36eda',
    text: `
【角色】伊莉絲・諾瓦（Iris Nova）
【種族】獸人族
【年齡】貓齡2歲（相當於人類24歲）
【職位】侍僕
【個性】有點迷糊、喜歡碎碎念、愛偷懶
【能力】水魔法。
【扮演者】霏Fei
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
},

  
 director: {
  '米納斯·薇婭': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMinas%20Veya.png?alt=media&token=108659f6-c445-4eb6-97f6-95a1d900f7ff',
    text: `
【角色】米納斯·薇婭
【職位】霍爾芬多學院主任
【宗旨】我是霍爾芬多分院的主任。忠誠是力量，榮譽是信仰。守護不是義務，而是誓言為家園、為夥伴、為世界的安寧。我們如雄鷹展翼，守望天空，永不退卻。
【擅長】防禦與騎士魔法
`,
    twitch: 'https://www.twitch.tv/medic'
  },

  '大衛．羅曼': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FDavid.png?alt=media&token=231081e4-6cce-4727-adfc-cab79a28a22e',
    text: `
【角色】大衛．羅曼
【職位】斯卡瑪林班主任
【宗旨】我是斯卡瑪林分院的主任。力量，是意志與磨練的結晶。唯有讓身體與心靈都承受試煉，力量才會回應並臣服於你。正如我們的徽章青蛇，沉著、致命、無懼挑戰。我們不逃避痛苦，我們征服它。
`,
    twitch: ''
  },

  '優莉安娜・貝娜': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20T.png?alt=media&token=de39f27e-f9e7-4d41-9b6e-88861fd5655e',
    text: `
【角色】優莉安娜・貝娜
【職位】特威克羅學院主任
【宗旨】我是特威克羅分院的主任。我們以智慧為刃、以知識為燈，追尋深藏於世界背後的真理。世人畏懼未知，而我們選擇直視並解讀它。只要答案仍被遮蔽，我們的探索便不會停止。
`,
    twitch: ''
  },

  '西追・普萊特': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FPlight.png?alt=media&token=eb31ea1a-5099-45be-988b-6be36d2bd3e9',
    text: `
【角色】西追・普萊特
【職位】赫文帕夫學院主任
【宗旨】我是赫文帕夫分院的主任。和諧是力量，平衡是道路。魔法能療癒世界，如蓮綻放，以溫柔止息混亂。
`,
    twitch: 'https://www.twitch.tv/cheese_prime_ham'
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



document.addEventListener('DOMContentLoaded', () => {
  const mainNav   = document.getElementById('mainNav');
  const mainMenu  = document.getElementById('mainMenu');
  if (!mainNav || !mainMenu) return;

  
  const ddWrap   = mainMenu.querySelector('.menu-has-dropdown');
  const ddToggle = ddWrap?.querySelector('.dropdown-toggle');
  const ddMenu   = ddWrap?.querySelector('.dropdown');

  if (ddToggle && ddMenu) {
    
    ddToggle.addEventListener('click', (e) => {
     
      if (window.matchMedia('(max-width: 800px)').matches) {
        e.preventDefault();
        e.stopPropagation();
        const expanded = ddToggle.getAttribute('aria-expanded') === 'true';
        ddToggle.setAttribute('aria-expanded', String(!expanded));
        ddWrap.classList.toggle('open-submenu', !expanded);
      }
    });

    
    document.addEventListener('click', (e) => {
      if (!mainNav.classList.contains('open')) return; // 只在手機開單時作用
      if (!ddWrap.contains(e.target)) {
        ddToggle.setAttribute('aria-expanded', 'false');
        ddWrap.classList.remove('open-submenu');
      }
    });

    // Esc 關閉（手機）
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ddToggle.setAttribute('aria-expanded', 'false');
        ddWrap.classList.remove('open-submenu');
      }
    });
  }
});



// === Dropdown ===
(function(){
  const mainNav = document.getElementById('mainNav');
  const ddHost  = mainNav?.querySelector('.menu-has-dropdown');
  const toggle  = ddHost?.querySelector('.dropdown-toggle');
  const panel   = ddHost?.querySelector('.dropdown');

  if(!mainNav || !ddHost || !toggle || !panel) return;

  function openDD() {
    ddHost.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeDD() {
    ddHost.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleDD() {
    if (ddHost.classList.contains('open')) closeDD();
    else openDD();
  }

  // 點按鈕開/關
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDD();
  });

  
  panel.addEventListener('click', (e) => e.stopPropagation());

  
  document.addEventListener('click', () => closeDD());

  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDD();
  });
})();




document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.querySelector('.teacher-filter');
  if (!filterBar) return;

  const buttons = Array.from(filterBar.querySelectorAll('.filter-btn'));
  const cards   = Array.from(document.querySelectorAll('.teacher-card'));

 
  function applyFilter(filter) {
    
    buttons.forEach(btn => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      btn.tabIndex = isActive ? 0 : -1;
    });

    // 顯示 / 隱藏卡片
    cards.forEach(card => {
      const raw = (card.dataset.group || '').toLowerCase().trim();
      const groups = raw.split(/[\s,]+/).filter(Boolean);
      const show = filter === 'all' ? true : groups.includes(filter.toLowerCase());
      card.classList.toggle('is-hidden', !show);
    });
  }

  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  
  filterBar.addEventListener('keydown', (e) => {
    const currentIndex = buttons.findIndex(b => b.classList.contains('active'));
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      let next = (currentIndex + dir + buttons.length) % buttons.length;
      buttons[next].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const el = document.activeElement;
      if (el && el.classList.contains('filter-btn')) {
        applyFilter(el.dataset.filter);
      }
    }
  });

  // 預設
  const initial = (buttons.find(b => b.classList.contains('active')) || buttons[0])?.dataset.filter || 'leader';
  applyFilter(initial);
});



(() => {
  const mainNav   = document.getElementById('mainNav');
  const mainMenu  = document.getElementById('mainMenu');
  const navToggle = mainNav?.querySelector('.nav-toggle');

  const isMobile = () => window.matchMedia('(max-width: 800px)').matches;

  /**  */
  function closeAll(container = mainMenu) {
    container.querySelectorAll('.open').forEach(li => li.classList.remove('open'));
    container.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /** 關閉指定  */
  function closeSiblings(li) {
    const parent = li.parentElement;
    if (!parent) return;
    parent.querySelectorAll(':scope > li.open').forEach(sib => {
      if (sib !== li) sib.classList.remove('open');
    });
    parent.querySelectorAll(':scope > li .dropdown-toggle[aria-expanded="true"]').forEach(btn => {
      const owner = btn.closest('li');
      if (owner !== li) btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* === 漢堡按鈕 === */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const nowOpen = !mainNav.classList.contains('open');
      mainNav.classList.toggle('open', nowOpen);
      navToggle.setAttribute('aria-expanded', String(nowOpen));
      if (!nowOpen) closeAll();
    });
  }

  /* === 手機）=== */
  mainMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.dropdown-toggle');
    if (!btn) return;

    const li = btn.closest('li');
    
    if (isMobile()) {
      e.preventDefault();
      const willOpen = !li.classList.contains('open');
     
      closeSiblings(li);
      li.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    }
  });

  /* ===  === */
  mainMenu.addEventListener('keydown', (e) => {
    const onToggle = e.target.closest('.dropdown-toggle');
    if (!onToggle) {
      if (e.key === 'Escape') {
       
        closeAll();
        if (isMobile()) mainNav.classList.remove('open');
      }
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const li = onToggle.closest('li');
    
      const willOpen = !li.classList.contains('open');
      closeSiblings(li);
      li.classList.toggle('open', willOpen);
      onToggle.setAttribute('aria-expanded', String(willOpen));
    } else if (e.key === 'Escape') {
      const li = onToggle.closest('li');
      li.classList.remove('open');
      onToggle.setAttribute('aria-expanded', 'false');
      onToggle.focus();
    }
  });


  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target)) {
      closeAll();
      if (isMobile()) {
        mainNav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });


  let lastIsMobile = isMobile();
  window.addEventListener('resize', () => {
    const nowIsMobile = isMobile();
    if (nowIsMobile !== lastIsMobile) {
    
      mainNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      closeAll();
      lastIsMobile = nowIsMobile;
    }
  });

  /* === ===
  mainMenu.addEventListener('click', (e) => {
    if (!isMobile()) return;
    const linkInDropdown = e.target.closest('.menu-has-dropdown .dropdown a, .submenu-has-dropdown .dropdown a');
    if (linkInDropdown) {
      // 預設行為是會跳轉或切換內容；若要保持展開可取消這段
      // mainNav.classList.remove('open'); closeAll();
    }
  });
  */
})();


