import { useState } from 'react'
import './App.css'

interface StyleOption {
  id: string
  label: string
  engLabel: string
  icon: string
}

interface ModelPhoto {
  url: string
  title: string
  items: string[]
  style: string
}

const STYLE_OPTIONS: StyleOption[] = [
  { id: 'casual', label: '캐주얼', engLabel: 'Casual', icon: '👕' },
  { id: 'street', label: '스트리트', engLabel: 'Street', icon: '🧢' },
  { id: 'minimal', label: '미니멀', engLabel: 'Minimal', icon: '◻️' },
  { id: 'feminine', label: '페미닌', engLabel: 'Feminine', icon: '🌸' },
  { id: 'sporty', label: '스포티', engLabel: 'Sporty', icon: '⚡' },
  { id: 'vintage', label: '빈티지', engLabel: 'Vintage', icon: '🎞️' },
  { id: 'formal', label: '포멀', engLabel: 'Formal', icon: '👔' },
  { id: 'bohemian', label: '보헤미안', engLabel: 'Bohemian', icon: '🌿' },
]

const STYLE_PHOTOS: Record<string, ModelPhoto[]> = {
  casual: [
    {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=480&h=640&fit=crop&q=85',
      title: '캐주얼 데님 룩',
      items: ['와이드 데님', '크롭 티셔츠', '청키 스니커즈'],
      style: 'Casual',
    },
    {
      url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=480&h=640&fit=crop&q=85',
      title: '일상 레이어링',
      items: ['오버핏 셔츠', '슬림 팬츠', '로퍼'],
      style: 'Casual',
    },
    {
      url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=480&h=640&fit=crop&q=85',
      title: '편안한 일상룩',
      items: ['린넨 탑', '와이드 팬츠', '샌들'],
      style: 'Casual',
    },
  ],
  street: [
    {
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=480&h=640&fit=crop&q=85',
      title: '어반 스트리트',
      items: ['그래픽 후드티', '카고 팬츠', '하이탑 스니커즈'],
      style: 'Street',
    },
    {
      url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=480&h=640&fit=crop&q=85',
      title: '스트리트 레이어링',
      items: ['오버사이즈 재킷', '배기 팬츠', '청키 부츠'],
      style: 'Street',
    },
    {
      url: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=480&h=640&fit=crop&q=85',
      title: '힙합 스트리트',
      items: ['볼캡', '박시 티셔츠', '조거 팬츠'],
      style: 'Street',
    },
  ],
  minimal: [
    {
      url: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=480&h=640&fit=crop&q=85',
      title: '클린 미니멀',
      items: ['화이트 크롭 티', '스트레이트 데님', '흰 스니커즈'],
      style: 'Minimal',
    },
    {
      url: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=480&h=640&fit=crop&q=85',
      title: '모노톤 미니멀',
      items: ['베이직 슬리브리스', '와이드 슬랙스', '뮬'],
      style: 'Minimal',
    },
    {
      url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=480&h=640&fit=crop&q=85',
      title: '심플 올데이룩',
      items: ['터틀넥 니트', '테이퍼드 팬츠', '앵클 부츠'],
      style: 'Minimal',
    },
  ],
  feminine: [
    {
      url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=480&h=640&fit=crop&q=85',
      title: '로맨틱 페미닌',
      items: ['플로럴 미디 드레스', '스트랩 샌들', '미니 백'],
      style: 'Feminine',
    },
    {
      url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=480&h=640&fit=crop&q=85',
      title: '우아한 여성스러움',
      items: ['러플 블라우스', '스커트', '힐'],
      style: 'Feminine',
    },
    {
      url: 'https://images.unsplash.com/photo-1483985988355-763728e1802d?w=480&h=640&fit=crop&q=85',
      title: '소프트 걸 룩',
      items: ['핑크 니트', '플리츠 미니스커트', '메리제인 슈즈'],
      style: 'Feminine',
    },
  ],
  sporty: [
    {
      url: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=480&h=640&fit=crop&q=85',
      title: '애슬레저 룩',
      items: ['스포츠 브라 탑', '레깅스', '러닝화'],
      style: 'Sporty',
    },
    {
      url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=480&h=640&fit=crop&q=85',
      title: '스포티 캐주얼',
      items: ['집업 후디', '조거 팬츠', '트레이닝화'],
      style: 'Sporty',
    },
    {
      url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=480&h=640&fit=crop&q=85',
      title: '액티브 스포티',
      items: ['테크 재킷', '숏츠', '하이탑 스니커즈'],
      style: 'Sporty',
    },
  ],
  vintage: [
    {
      url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=480&h=640&fit=crop&q=85',
      title: '70s 레트로 룩',
      items: ['플레어 팬츠', '체크 블라우스', '플랫폼 슈즈'],
      style: 'Vintage',
    },
    {
      url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=480&h=640&fit=crop&q=85',
      title: '클래식 빈티지',
      items: ['빈티지 코트', '하이웨이스트 스커트', '메리제인'],
      style: 'Vintage',
    },
    {
      url: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=480&h=640&fit=crop&q=85',
      title: '90s 그런지',
      items: ['플란넬 셔츠', '와이드 데님', '청키 부츠'],
      style: 'Vintage',
    },
  ],
  formal: [
    {
      url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=480&h=640&fit=crop&q=85',
      title: '비즈니스 포멀',
      items: ['테일러드 블레이저', '슬림 팬츠', '옥스퍼드 슈즈'],
      style: 'Formal',
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=640&fit=crop&q=85',
      title: '스마트 포멀',
      items: ['수트 재킷', '드레스 셔츠', '슬랙스'],
      style: 'Formal',
    },
    {
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=480&h=640&fit=crop&q=85',
      title: '엘레강스 포멀',
      items: ['시스 드레스', '스틸레토 힐', '클러치 백'],
      style: 'Formal',
    },
  ],
  bohemian: [
    {
      url: 'https://images.unsplash.com/photo-1522091066250-66be3e82d6ab?w=480&h=640&fit=crop&q=85',
      title: '프리 스피릿 보헤미안',
      items: ['플로우 맥시 드레스', '레이어드 목걸이', '슈즈 샌들'],
      style: 'Bohemian',
    },
    {
      url: 'https://images.unsplash.com/photo-1485462537746-965f33f5f2b3?w=480&h=640&fit=crop&q=85',
      title: '보헤미안 레이어링',
      items: ['자수 블라우스', '와이드 스커트', '앵클 부츠'],
      style: 'Bohemian',
    },
    {
      url: 'https://images.unsplash.com/photo-1432139555133-3ea8468b4bbf?w=480&h=640&fit=crop&q=85',
      title: '어스톤 보헤미안',
      items: ['린넨 탑', '패치워크 스커트', '비즈 액세서리'],
      style: 'Bohemian',
    },
  ],
}

function getBMIInfo(bmi: number): { label: string; tip: string } {
  if (bmi < 18.5) return { label: '저체중', tip: '볼륨감을 더하는 레이어링 스타일을 추천해요.' }
  if (bmi < 23) return { label: '정상', tip: '어떤 스타일도 잘 어울리는 체형이에요!' }
  if (bmi < 25) return { label: '과체중', tip: '세로 라인을 강조하는 스타일을 추천해요.' }
  return { label: '비만', tip: '다크 컬러와 세로 스트라이프로 슬림하게 연출해보세요.' }
}

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const bmi = (() => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return null
    return parseFloat((w / (h * h)).toFixed(1))
  })()

  const toggleStyle = (styleId: string) => {
    setShowResults(false)
    setSelectedStyles(prev =>
      prev.includes(styleId) ? prev.filter(s => s !== styleId) : [...prev, styleId]
    )
  }

  const handleRecommend = () => {
    if (!height || !weight) {
      alert('키와 몸무게를 입력해주세요.')
      return
    }
    if (selectedStyles.length === 0) {
      alert('스타일 키워드를 하나 이상 선택해주세요.')
      return
    }
    setIsLoading(true)
    setShowResults(false)
    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }, 1200)
  }

  const recommendedPhotos = selectedStyles.flatMap(s => STYLE_PHOTOS[s] ?? [])

  return (
    <div className="app">
      {/* Hero Header */}
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">AI Personal Styling</p>
          <h1 className="hero-title">
            나만의 스타일을<br />찾아드립니다
          </h1>
          <p className="hero-subtitle">
            키와 몸무게, 좋아하는 스타일을 알려주시면<br />
            당신에게 꼭 맞는 패션을 추천해 드려요
          </p>
        </div>
      </header>

      <main className="main">
        {/* Body Info */}
        <section className="section">
          <h2 className="section-title">
            <span className="step-badge">01</span>
            신체 정보 입력
          </h2>
          <div className="body-inputs">
            <div className="input-group">
              <label className="input-label">키</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="input-field"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  placeholder="예: 165"
                  min="100"
                  max="250"
                />
                <span className="input-unit">cm</span>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">몸무게</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="input-field"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  placeholder="예: 55"
                  min="30"
                  max="200"
                />
                <span className="input-unit">kg</span>
              </div>
            </div>
          </div>

          {bmi !== null && (
            <div className="bmi-card">
              <div className="bmi-left">
                <span className="bmi-label">BMI</span>
                <span className="bmi-value">{bmi}</span>
                <span className="bmi-category">{getBMIInfo(bmi).label}</span>
              </div>
              <p className="bmi-tip">{getBMIInfo(bmi).tip}</p>
            </div>
          )}
        </section>

        {/* Style Keywords */}
        <section className="section">
          <h2 className="section-title">
            <span className="step-badge">02</span>
            선호 스타일 선택
            <span className="section-hint">중복 선택 가능</span>
          </h2>
          <div className="style-grid">
            {STYLE_OPTIONS.map(style => (
              <button
                key={style.id}
                className={`style-chip ${selectedStyles.includes(style.id) ? 'selected' : ''}`}
                onClick={() => toggleStyle(style.id)}
              >
                <span className="chip-icon">{style.icon}</span>
                <span className="chip-label">{style.label}</span>
                <span className="chip-eng">{style.engLabel}</span>
              </button>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <div className="cta-wrapper">
          <button
            className={`cta-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleRecommend}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="btn-loading">
                <span className="spinner" />
                스타일 분석 중...
              </span>
            ) : (
              '스타일 추천받기'
            )}
          </button>
          {selectedStyles.length > 0 && !isLoading && (
            <p className="cta-hint">
              선택한 스타일: {selectedStyles.map(s => STYLE_OPTIONS.find(o => o.id === s)?.label).join(', ')}
            </p>
          )}
        </div>

        {/* Results */}
        {showResults && (
          <section id="results" className="results-section">
            <div className="results-header">
              <h2 className="results-title">추천 스타일 룩북</h2>
              <p className="results-subtitle">
                {height}cm · {weight}kg 체형에 어울리는{' '}
                {selectedStyles.map(s => STYLE_OPTIONS.find(o => o.id === s)?.label).join(' + ')} 스타일
              </p>
            </div>
            <div className="photo-grid">
              {recommendedPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="photo-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="photo-img-wrapper">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="photo-img"
                      loading="lazy"
                    />
                    <div className="photo-style-badge">{photo.style}</div>
                  </div>
                  <div className="photo-info">
                    <h3 className="photo-title">{photo.title}</h3>
                    <ul className="photo-items">
                      {photo.items.map(item => (
                        <li key={item} className="photo-item">
                          <span className="dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Personal Stylist · Powered by AI</p>
      </footer>
    </div>
  )
}

export default App
