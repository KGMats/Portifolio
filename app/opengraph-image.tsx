import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'KGMats | Systems & Graphics Engineering Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          color: 'white',
          padding: '40px 80px',
        }}
      >
        {/* Left Side */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              fontFamily: 'sans-serif',
            }}
          >
            KGMats
          </div>

          {/* Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 30, color: '#d4d4d4', marginBottom: 40 }}>
            <div style={{ display: 'flex' }}>Systems Engineer &</div>
            <div style={{ display: 'flex' }}>Backend Developer</div>
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 32px',
              backgroundColor: '#6b21a8', // Purple-800
              borderRadius: '12px',
              color: 'white',
              fontSize: 24,
              fontWeight: 600,
              alignSelf: 'flex-start',
              boxShadow: '0 4px 20px rgba(107, 33, 168, 0.5)', 
            }}
          >
            View Portfolio &rarr;
          </div>
        </div>

        {/* Right Side (Code Editor) */}
        <div
          style={{
            display: 'flex',
            width: '520px', 
            height: '480px', 
            backgroundColor: '#171717',
            border: '1px solid #333',
            borderRadius: '16px',
            padding: '24px',
            flexDirection: 'column',
            fontFamily: 'monospace',
            boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
            fontSize: 15,
            overflow: 'hidden'
          }}
        >
          {/* Macos decorator */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}>
            <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
              # libterm.py: Low-level terminal manipulation
            </div>
            <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
              # Goal: pure Python TUI without 'curses' lib
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <span style={{ color: '#c084fc' }}>import</span>
            <span style={{ color: '#d4d4d4', marginLeft: 8 }}>sys</span>
          </div>

          <div style={{ display: 'flex', marginTop: 15 }}>
            <span style={{ color: '#c084fc' }}>class</span>
            <span style={{ color: '#fbbf24', marginLeft: 8 }}>Terminal</span>
            <span style={{ color: '#d4d4d4' }}>:</span>
          </div>
           <div style={{ display: 'flex', marginLeft: 40 }}>
            <span style={{ color: '#6b7280' }}> """Implementa funções auxiliares para manipulação do terminal."""</span>
          </div>

          <div style={{ display: 'flex', marginTop: 10 }}>
            <span style={{ color: '#c084fc', marginLeft: 20 }}>def</span>
            <span style={{ color: '#60a5fa', marginLeft: 8 }}>__init__</span>
            <span style={{ color: '#d4d4d4' }}>(self):</span>
          </div>
          <div style={{ display: 'flex', marginLeft: 40 }}>
            <span style={{ color: '#d4d4d4' }}>self.stdout = sys.stdout</span>
          </div>

          <div style={{ display: 'flex', marginTop: 15 }}>
            <span style={{ color: '#c084fc', marginLeft: 20 }}>def</span>
            <span style={{ color: '#60a5fa', marginLeft: 8 }}>move_cursor</span>
            <span style={{ color: '#d4d4d4' }}>(self, x, y):</span>
          </div>
          
          <div style={{ display: 'flex', marginLeft: 40 }}>
             <span style={{ color: '#d4d4d4' }}>self.stdout.write(</span>
             <span style={{ color: '#a3e635' }}>f'\033[&#123;y&#125;;&#123;x&#125;H'</span>
             <span style={{ color: '#d4d4d4' }}>)</span>
          </div>

          <div style={{ display: 'flex', marginLeft: 40, marginTop: 5 }}>
             <span style={{ color: '#d4d4d4' }}>self.stdout.flush()</span>
          </div>

          <div style={{ display: 'flex', marginTop: 15 }}>
            <span style={{ color: '#c084fc', marginLeft: 20 }}>def</span>
            <span style={{ color: '#60a5fa', marginLeft: 8 }}>hide_cursor</span>
            <span style={{ color: '#d4d4d4' }}>(self):</span>
          </div>
          <div style={{ display: 'flex', marginLeft: 40 }}>
            <span style={{ color: '#d4d4d4' }}>self.stdout.write(</span>
            <span style={{ color: '#a3e635' }}>'\033[?25l'</span>
            <span style={{ color: '#d4d4d4' }}>)</span>
          </div>

          <div style={{ display: 'flex', color: '#6b7280', marginTop: 'auto', alignSelf: 'flex-end', fontSize: 14 }}>
             TaskManager/libterm.py
          </div>

        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
