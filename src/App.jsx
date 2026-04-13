import React, { useEffect, useRef, useState } from 'react';
import anh2 from './assets/anh2.png';
import anh3 from './assets/anh3.png';

const navItems = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#phan-mot', label: 'Chủ đề' }
];

const independenceCards = [
  {
    number: '01',
    title: 'Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc',
    content:
      'Theo Hồ Chí Minh, độc lập dân tộc không phải là điều xin được, cho được, mà là quyền thiêng liêng của mọi dân tộc. Dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.',
    evidence: [
      'Năm 1919, Nguyễn Ái Quốc gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Vécxây, đòi quyền tự do, dân chủ và bình đẳng cho nhân dân Đông Dương.',
      'Trong Tuyên ngôn Độc lập năm 1945, Hồ Chí Minh khẳng định: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.”'
    ]
  },
  {
    number: '02',
    title: 'Độc lập dân tộc phải gắn với tự do, hạnh phúc của nhân dân',
    content:
      'Hồ Chí Minh không chấp nhận một nền độc lập chỉ có trên danh nghĩa. Theo Người, độc lập phải đi liền với tự do và hạnh phúc của nhân dân.',
    evidence: [
      'Câu nói rất nổi tiếng của Hồ Chí Minh: “Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”',
      'Sau Cách mạng Tháng Tám, Người nêu rất rõ 4 việc cấp thiết: làm cho dân có ăn, có mặc, có chỗ ở, có học hành.'
    ],
  },
  {
    number: '03',
    title: 'Độc lập dân tộc phải là độc lập thật sự, hoàn toàn, triệt để',
    content:
      'Hồ Chí Minh phản đối kiểu “độc lập giả hiệu” do thực dân dựng lên. Người yêu cầu độc lập phải là độc lập thật sự, tức là dân tộc phải có quyền tự quyết hoàn toàn.',
    bullets: [
      'Không tự quyết được ngoại giao',
      'Không có quân đội riêng',
      'Không có tài chính riêng'
    ],
  },
  {
    number: '04',
    title: 'Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ',
    content:
      'Theo Hồ Chí Minh, độc lập dân tộc không thể tách rời thống nhất đất nước và toàn vẹn lãnh thổ.',
    evidence: [
      'Hồ Chí Minh khẳng định: “Nước Việt Nam là một, dân tộc Việt Nam là một.”',
      'Trong thư gửi đồng bào Nam Bộ trước khi sang Pháp đàm phán năm 1946, Người nói: “Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.”'
    ],
  }
];

const lifeTimeline = [
  {
    label: 'Mục tiêu cao nhất',
    quote:
      '“Làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.”',
    text:
      'Gọi độc lập dân tộc là “lẽ sống” vì đó là mục tiêu cao nhất mà Hồ Chí Minh theo đuổi suốt cuộc đời.'
  },
  {
    label: 'Ý chí hy sinh',
    quote:
      '“Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.”',
    text:
      'Trong kháng chiến chống Pháp, lời khẳng định ấy cho thấy độc lập dân tộc là giới hạn không thể nhân nhượng.'
  },
  {
    label: 'Chân lý thời đại',
    quote: '“Không có gì quý hơn độc lập, tự do.”',
    text:
      'Năm 1965, Hồ Chí Minh nêu lên chân lý có sức lay động sâu rộng đối với nhân dân Việt Nam và các dân tộc yêu chuộng tự do trên thế giới.'
  }
];

const doctrineCards = [
  {
    sticker: '01',
    title: 'Có quan niệm rõ ràng về nội dung độc lập',
    points: [
      'Độc lập là quyền thiêng liêng của mọi dân tộc.',
      'Độc lập phải thật sự, không hình thức.',
      'Độc lập gắn với tự do, hạnh phúc của nhân dân.',
      'Độc lập gắn với thống nhất đất nước.'
    ]
  },
  {
    sticker: '02',
    title: 'Có con đường thực hiện rất rõ',
    points: [
      'Đi theo con đường cách mạng vô sản.',
      'Có Đảng Cộng sản lãnh đạo.',
      'Dựa vào đại đoàn kết toàn dân.',
      'Kết hợp đấu tranh chính trị và vũ trang khi cần thiết.'
    ],
    evidence:
      'Dẫn chứng: lựa chọn con đường cách mạng vô sản sau khi tiếp cận Vladimir Lenin; thành lập Đảng Cộng sản Việt Nam; chủ trương đại đoàn kết toàn dân.'
  }
];

const doctrineCardsMore = [
  {
    sticker: '03',
    title: 'Được thực tiễn chứng minh là đúng',
    points: [
      'Cách mạng Tháng Tám năm 1945.',
      'Thắng lợi kháng chiến chống Pháp.',
      'Thắng lợi kháng chiến chống Mỹ.'
    ]
  },
  {
    sticker: 'Tổng',
    title: 'Kết luận học thuyết',
    points: [
      'Tư tưởng độc lập dân tộc của Hồ Chí Minh không phải cảm hứng nhất thời.',
      'Đó là một hệ thống lý luận nhất quán.',
      'Có nội dung, có phương pháp và được thực tiễn lịch sử kiểm nghiệm.'
    ]
  }
];

const strengthCards = [
  {
    title: 'Xác định đúng mục tiêu lớn nhất của dân tộc',
    text:
      'Độc lập dân tộc là khát vọng lớn nhất của nhân dân Việt Nam sau hàng chục năm mất nước. Khi Hồ Chí Minh đặt đúng mục tiêu ấy lên hàng đầu, Người đã quy tụ được lòng dân.',
  },
  {
    title: 'Khơi dậy mạnh mẽ lòng yêu nước và ý chí hy sinh',
    text:
      'Tư tưởng độc lập dân tộc của Hồ Chí Minh có sức cổ vũ mạnh mẽ, thôi thúc toàn dân đứng lên đấu tranh vì tự do, độc lập.',
  },
  {
    title: 'Gắn độc lập với quyền lợi thiết thực của nhân dân',
    text:
      'Khi nhân dân hiểu rằng giành độc lập là để được sống tự do, có cơm ăn áo mặc, có học hành, có tương lai, thì cách mạng trở thành sự nghiệp của toàn dân.',
    evidence:
      'Dẫn chứng: Sau năm 1945, chính sách chống đói, chống dốt, cải thiện đời sống được triển khai rộng rãi.',
  },
  {
    title: 'Chỉ ra con đường cách mạng đúng',
    text:
      'Hồ Chí Minh không chỉ nói “phải giành độc lập”, mà còn chỉ ra làm thế nào để giành được độc lập: phải có Đảng lãnh đạo, phải đại đoàn kết toàn dân, lấy công nông làm nền tảng, phải chủ động sáng tạo và kết hợp đúng hình thức đấu tranh.',
  }
];

const worldCards = [
  {
    title: '1. Quyền độc lập là quyền chung của mọi dân tộc',
    text:
      'Hồ Chí Minh không nói cho riêng Việt Nam, mà nói cho tất cả các dân tộc thuộc địa: dân tộc nào cũng có quyền độc lập, tự do.',
    quote:
      '“Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do…”'
  },
  {
    title: '2. Các dân tộc thuộc địa có thể tự giải phóng mình',
    text:
      'Đây là điểm sáng tạo rất lớn. Người cho rằng cách mạng ở thuộc địa không cần thụ động chờ cách mạng ở chính quốc, mà có thể chủ động đứng lên giành thắng lợi trước.',
    quote:
      'Hồ Chí Minh nhấn mạnh công cuộc giải phóng chỉ có thể thực hiện bằng nỗ lực của chính các dân tộc bị áp bức.'
  },
  {
    title: '3. Thắng lợi của Việt Nam là minh chứng sống động',
    text:
      'Thắng lợi của Việt Nam cho thấy một dân tộc nhỏ yếu vẫn có thể đánh bại thực dân, đế quốc nếu có đường lối đúng. Điều này cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở châu Á, châu Phi, Mỹ Latinh.',
  }
];

const revolutionCards = [
  {
    number: '01',
    title: 'Muốn thắng lợi phải đi theo con đường cách mạng vô sản',
    content:
      'Hồ Chí Minh không chọn con đường cứu nước kiểu phong kiến hay tư sản, mà chọn con đường cách mạng vô sản.',
    evidence:
      'Sau khi tiếp cận Luận cương của Lênin, Người khẳng định: muốn cứu nước, giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.',
    explanation:
      'Vì con đường này không chỉ giải phóng dân tộc, mà còn hướng đến giải phóng nhân dân lao động một cách triệt để.'
  },
  {
    number: '02',
    title: 'Cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo',
    content:
      'Theo Hồ Chí Minh, cách mạng muốn thành công phải có một đảng cách mạng đủ bản lĩnh, đủ đường lối, đủ khả năng tổ chức quần chúng.',
    evidence: 'Trong Đường cách mệnh, Người nêu rõ: “Trước hết phải có đảng cách mệnh.”',
    explanation:
      'Đảng giữ vai trò giác ngộ quần chúng, tổ chức lực lượng, lãnh đạo cách mạng đi đúng hướng.'
  },
  {
    number: '03',
    title: 'Cách mạng phải dựa vào đại đoàn kết toàn dân, lấy công – nông làm nền tảng',
    content:
      'Hồ Chí Minh khẳng định cách mạng là sự nghiệp của quần chúng nhân dân. Phải đoàn kết mọi tầng lớp yêu nước, nhưng công nhân và nông dân là lực lượng nền tảng.',
    evidence: 'Người nói: “Cách mệnh là việc chung cả dân chúng chứ không phải việc một hai người.”',
    explanation:
      'Đây là lý do cách mạng Việt Nam trở thành phong trào toàn dân, tạo sức mạnh rất lớn trong đấu tranh.'
  }
];

const revolutionCardsMore = [
  {
    number: '04',
    title: 'Cách mạng giải phóng dân tộc phải chủ động, sáng tạo',
    content:
      'Hồ Chí Minh cho rằng các dân tộc thuộc địa không được thụ động chờ cách mạng ở chính quốc, mà phải chủ động đứng lên giành độc lập.',
    explanation:
      'Tư tưởng này khẳng định vai trò chủ thể của các dân tộc thuộc địa trong sự nghiệp tự giải phóng mình.'
  },
  {
    number: '05',
    title: 'Cách mạng giải phóng dân tộc phải dùng bạo lực cách mạng khi cần thiết',
    content:
      'Do thực dân, đế quốc dùng bạo lực để áp bức và thống trị, nên phải dùng bạo lực cách mạng để chống lại bạo lực phản cách mạng.',
    bullets: [
      'Không phải bạo lực mù quáng',
      'Là bạo lực của quần chúng',
      'Kết hợp đấu tranh chính trị với đấu tranh vũ trang',
      'Tùy hoàn cảnh mà vận dụng cho phù hợp'
    ],
    evidence: 'Dẫn chứng: Khởi nghĩa vũ trang năm 1945; kháng chiến chống Pháp, chống Mỹ.',
  }
];

const quoteGallery = [
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ba%20Dinh%20Square%20September%202nd,%201945.jpg',
    quote: '“Không có gì quý hơn độc lập, tự do.”',
    note: 'Chân lý thời đại gắn với sức mạnh tinh thần của dân tộc Việt Nam.'
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Vo%20Nguyen%20Giap%20and%20Ho%20Chi%20Minh%201945.jpg',
    quote: '“Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.”',
    note: 'Lời hiệu triệu khơi dậy ý chí chiến đấu và tinh thần quyết tử cho độc lập.'
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ho-chi-Minh%20with%20children%20%281%29.jpg',
    quote: '“Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”',
    note: 'Độc lập phải gắn với cơm ăn, áo mặc, học hành và hạnh phúc thực sự của nhân dân.'
  }
];

const keywordTags = [
  'độc lập dân tộc',
  'tự do',
  'hạnh phúc của nhân dân',
  'thống nhất đất nước',
  'toàn vẹn lãnh thổ',
  'lẽ sống',
  'học thuyết',
  'nguồn sức mạnh chiến thắng',
  'nguồn động viên quốc tế',
  'cách mạng vô sản',
  'Đảng Cộng sản lãnh đạo',
  'đại đoàn kết toàn dân',
  'chủ động sáng tạo',
  'bạo lực cách mạng'
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroWatermarkRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 16);

          if (heroWatermarkRef.current && scrollY < window.innerHeight) {
            heroWatermarkRef.current.style.transform = `translate(-50%, calc(-46% + ${scrollY * 0.08}px)) scale(1.02)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .stagger-up');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="top">
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-mark">HCM</span>
            <span className="nav-logo-copy">
              <strong>Tư tưởng Hồ Chí Minh</strong>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="#ket-luan" className="nav-cta">
            Xem kết luận
          </a>

          <button
            type="button"
            className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Mở menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="mobile-link" onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#ket-luan" className="mobile-link" onClick={closeMenu}>
          Xem kết luận
        </a>
      </div>

      <section className="hero section-light" id="hero">
        <div className="hero-dots"></div>
        <div className="hero-watermark">DOC LAP</div>
        <img
          ref={heroWatermarkRef}
          className="hero-portrait"
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Ho%20Chi%20Minh%201946.jpg"
          alt="Chân dung Hồ Chí Minh"
          loading="eager"
        />
        <div className="container hero-content">
          <h1 className="hero-title">
            <span>Tư tưởng</span>
            <span>Hồ Chí Minh</span>
          </h1>
          <p className="hero-quote">
            “Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.”
          </p>
          <div className="hero-actions">
            <a href="#gioi-thieu" className="button-primary">
              Khám phá nội dung
            </a>
            <a href="#phan-mot" className="button-secondary">
              Xem phần I
            </a>
          </div>
        </div>
      </section>

      <section className="section section-intro section-light" id="gioi-thieu">
        <div className="container">
          <div className="section-heading center reveal">
            <span className="section-label"></span>
            <h2>Giới thiệu</h2>
          </div>

          <div className="intro-layout">
            <figure className="intro-frame reveal">
              <div className="intro-image-shell">
                <img
                  src="https://image.sggp.org.vn/Uploaded/2026/Xqkbczma/831/DSC_1768.gif"
                  alt="Tượng đài Chủ tịch Hồ Chí Minh"
                  loading="lazy"
                />
              </div>
              <figcaption>Tượng đài Chủ tịch Hồ Chí Minh</figcaption>
            </figure>

            <div className="intro-copy reveal-left">
              <p className="dropcap-paragraph">
                <span className="dropcap">"K</span><strong>hông có gì quý hơn độc lập, tự do"</strong> — đây không chỉ là khẩu hiệu mà là tư tưởng cốt lõi, là chân lý bất hủ của Hồ Chí Minh. Đối với Người, độc lập dân tộc là
                <mark> quyền thiêng liêng, bất khả xâm phạm,</mark> là khát vọng cháy bỏng xuyên suốt lịch sử dựng nước và giữ nước của dân tộc.
              </p>
              <p>
                Độc lập không phải là khái niệm trừu tượng mà phải thiết thực, gắn liền với tự do, cơm no,
                áo ấm và hạnh phúc của nhân dân. Người khẳng định:
                <strong>"Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì"</strong>. Tư tưởng này phản ánh tính nhân văn sâu sắc, đặt con người vào vị trí trung tâm của sự nghiệp giải phóng.
              </p>
              <p>Đó phải là nền độc lập hoàn toàn, triệt để và gắn liền với sự thống nhất, toàn vẹn lãnh thổ. Như lời Người từng căn dặn:
                "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi".</p>
              <div className="intro-signature">
                <span className="intro-signature-title">Chủ tịch nước</span>
                <span className="intro-signature-name">Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-main section-light" id="phan-mot">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần I</span>
            <h2>Tư tưởng Hồ Chí Minh về độc lập dân tộc</h2>
          </div>

          <div className="concept-stack stagger-up">
            {independenceCards.map((card) => (
              <article key={card.number} className="concept-card reveal-child">
                <div className="concept-card-top">
                  <div className="concept-number">{card.number}</div>
                  <h3>{card.title}</h3>
                </div>
                <div className="concept-card-main">
                  <div className="concept-body">
                    <p>{card.content}</p>

                    {card.evidence ? (
                      <div className="evidence-block">
                        <strong>Dẫn chứng</strong>
                        {card.evidence.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    ) : null}

                    {card.bullets ? (
                      <div className="criteria-block">
                        <strong>Dẫn chứng khái quát</strong>
                        <ul>
                          {card.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="concept-image-slot">
                    {card.image ? (
                      <img src={card.image} alt={card.imageAlt || ''} loading="lazy" />
                    ) : (
                      <div className="concept-image-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        <small>Thêm hình ảnh<br />dẫn chứng</small>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-timeline section-light" id="phan-hai">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần II</span>
            <h2>Vì sao độc lập dân tộc là “lẽ sống” của Hồ Chí Minh</h2>
          </div>

          <div className="timeline-layout">
            <div className="timeline-image reveal">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Ho%20Chi%20Minh%201946.jpg"
                alt="Chân dung Hồ Chí Minh"
                loading="lazy"
              />
            </div>

            <div className="timeline-content stagger-up">
              {lifeTimeline.map((item, index) => (
                <article key={item.label} className="timeline-item reveal-child">
                  <div className="timeline-marker">
                    <span></span>
                    {index !== lifeTimeline.length - 1 ? <i></i> : null}
                  </div>
                  <div className="timeline-card">
                    <span className="timeline-kicker">{item.label}</span>
                    <blockquote>{item.quote}</blockquote>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}

              <div className="timeline-summary reveal-child">
                Vì vậy, độc lập dân tộc không chỉ là một tư tưởng Hồ Chí Minh nêu ra, mà là lý tưởng
                sống, là mục đích sống, là khát vọng lớn nhất của cả cuộc đời Người.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-values section-light" id="phan-ba">
        <div className="container">
          <div className="section-heading center reveal">
            <span className="section-label">Phần III</span>
            <h2>Vì sao có thể nói đó là “học thuyết” của Hồ Chí Minh</h2>
            <p>
              Đây không phải là cảm hứng nhất thời, mà là một hệ thống quan điểm hoàn chỉnh về bản chất
              độc lập, con đường giành độc lập, lực lượng thực hiện, phương pháp đấu tranh và mục tiêu
              sau khi giành độc lập.
            </p>
          </div>

          <div className="values-rows stagger-up">
            <article className="doctrine-row reveal-child">
              <div className="doctrine-text-card">
                <span className="paper-sticker">{doctrineCards[0].sticker}</span>
                <h3>{doctrineCards[0].title}</h3>
                <ul>
                  {doctrineCards[0].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="doctrine-row has-gallery reveal-child">
              <div className="doctrine-text-card">
                <span className="paper-sticker">{doctrineCards[1].sticker}</span>
                <h3>{doctrineCards[1].title}</h3>
                <ul>
                  {doctrineCards[1].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="doctrine-gallery">
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/L-Vladimir%20speaking.jpg"
                      alt="Vladimir Lenin diễn thuyết trước quần chúng"
                      loading="lazy"
                    />
                  </div>
                  <small>Lựa chọn con đường cách mạng vô sản sau khi tiếp cận Vladimir Lenin</small>
                </article>
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src={anh2}
                      alt="Ảnh tư liệu về thành lập Đảng Cộng sản Việt Nam"
                      loading="lazy"
                    />
                  </div>
                  <small>Thành lập Đảng Cộng sản Việt Nam</small>
                </article>
                <article className="doctrine-image-card">
                  <div className="doctrine-image-slot">
                    <img
                      src={anh3}
                      alt="Ảnh tư liệu về chủ trương đại đoàn kết toàn dân"
                      loading="lazy"
                    />
                  </div>
                  <small>Chủ trương đại đoàn kết toàn dân</small>
                </article>
              </div>
            </article>

            <article className="doctrine-row reveal-child">
              <div className="doctrine-text-card doctrine-proof-card">
                <span className="paper-sticker">{doctrineCardsMore[0].sticker}</span>
                <h3>{doctrineCardsMore[0].title}</h3>

                <div className="doctrine-proof-grid">
                  <article className="proof-card">
                    <h4>Cách mạng Tháng Tám năm 1945</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%ADt%20tinh%20ch%C3%A0o%20m%E1%BB%ABng%20C%C3%A1ch%20m%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%20n%C4%83m%201945%20th%C3%A0nh%20c%C3%B4ng%20t%E1%BA%A1i%20Nh%C3%A0%20h%C3%A1t%20L%E1%BB%9Bn%20H%C3%A0%20N%E1%BB%99i.jpg"
                        alt="Mít tinh chào mừng Cách mạng Tháng Tám năm 1945 thành công tại Nhà hát Lớn Hà Nội"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="proof-card">
                    <h4>Thắng lợi kháng chiến chống Pháp</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://commons.wikimedia.org/wiki/Special:FilePath/Victory_in_Battle_of_Dien_Bien_Phu.jpg"
                        alt="Chiến thắng Điện Biên Phủ năm 1954"
                        loading="lazy"
                      />
                    </div>
                  </article>
                  <article className="proof-card">
                    <h4>Thắng lợi kháng chiến chống Mỹ</h4>
                    <div className="proof-image-slot">
                      <img
                        src="https://s3-hn-2.cloud.cmctelecom.vn/vietnam/resource/IMAGE/2025/1/18/ce0fed8b635b4d5fa11e959e827c4b22"
                        alt="Xe tăng tiến vào Dinh Độc Lập, thắng lợi kháng chiến chống Mỹ"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </article>

            <article className="doctrine-summary-row reveal-child">
              <div className="doctrine-text-card summary">
                <span className="paper-sticker">{doctrineCardsMore[1].sticker}</span>
                <h3>{doctrineCardsMore[1].title}</h3>
                <ul>
                  {doctrineCardsMore[1].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-gallery section-dark" id="phan-bon">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần IV</span>
            <h2>Nguồn sức mạnh làm nên chiến thắng của nhân dân Việt Nam</h2>
          </div>

          <div className="strength-grid stagger-up">
            {strengthCards.map((card, index) => (
              <article key={card.title} className="strength-card reveal-child">
                <div className="strength-top">
                  <span className="strength-index">0{index + 1}</span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.text}</p>
                {card.quote ? <blockquote>{card.quote}</blockquote> : null}
                {card.evidence ? <div className="strength-evidence">{card.evidence}</div> : null}
                {card.closing ? <div className="strength-closing">{card.closing}</div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-world section-dark" id="phan-nam">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần V</span>
            <h2>Vì sao đây là “nguồn động viên các dân tộc bị áp bức trên thế giới”</h2>
            <p>
              Ở cấp độ quốc tế, tư tưởng Hồ Chí Minh nâng vấn đề độc lập dân tộc từ câu chuyện của Việt
              Nam thành một thông điệp chung cho các dân tộc thuộc địa và bị áp bức.
            </p>
          </div>

          <div className="world-grid stagger-up">
            {worldCards.map((card) => (
              <article key={card.title} className="world-card reveal-child">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.quote ? <blockquote>{card.quote}</blockquote> : null}
                {card.closing ? <div className="closing-note dark">{card.closing}</div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-revolution section-light" id="phan-sau">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Phần VI</span>
            <h2>Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc</h2>
          </div>

          <div className="revolution-grid stagger-up">
            {[...revolutionCards, ...revolutionCardsMore].map((card) => (
              <article key={card.number} className={`revolution-card reveal-child ${card.number === '05' ? 'featured' : ''}`}>
                <span className="revolution-badge">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                {card.evidence ? (
                  <div className="evidence-block compact">
                    <strong>Dẫn chứng</strong>
                    <p>{card.evidence}</p>
                  </div>
                ) : null}
                {card.explanation ? (
                  <div className="explanation-block">
                    <strong>Giải thích</strong>
                    <p>{card.explanation}</p>
                  </div>
                ) : null}
                {card.bullets ? (
                  <div className="criteria-block">
                    <strong>Làm rõ cách hiểu</strong>
                    <ul>
                      {card.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {card.closing ? <div className="closing-note">{card.closing}</div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-conclusion section-dark" id="ket-luan">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">Kết luận</span>
            <h2>Độc lập dân tộc là trục tư tưởng xuyên suốt</h2>
          </div>

          <div className="conclusion-layout">
            <div className="summary-box reveal">
              <h3>Tổng kết nội dung trọng tâm</h3>
              <p>
                Trong tư tưởng Hồ Chí Minh, độc lập dân tộc là quyền thiêng liêng của mọi dân tộc, phải
                gắn với tự do, hạnh phúc của nhân dân, phải là độc lập thật sự, hoàn toàn, triệt để và
                gắn liền với thống nhất, toàn vẹn lãnh thổ. Chính vì vậy, độc lập dân tộc trở thành lẽ
                sống, trở thành học thuyết, trở thành nguồn sức mạnh chiến thắng của nhân dân Việt Nam và
                nguồn động viên lớn lao đối với các dân tộc bị áp bức trên thế giới.
              </p>
            </div>

            <div className="final-quote reveal">
              <blockquote>“Không có gì quý hơn độc lập, tự do.”</blockquote>
              <p>
                Câu nói này không chỉ là một chân lý lịch sử, mà còn là điểm quy tụ tư tưởng, đạo lý và
                ý chí hành động trong toàn bộ sự nghiệp cách mạng của Hồ Chí Minh.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
