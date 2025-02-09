import React from 'react';

const BookReader = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '1.8rem' }}>📖 قراءة الكتاب: ورد الولادة</h1>
      <h3 style={{ fontSize: '1.2rem' }}>✍️ تأليف: نوره بنت عبدالرحمن البطي (أم عبدالله والجوهره)</h3>

      {/* Responsive PDF Container */}
      <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
        <iframe 
          src={`${process.env.PUBLIC_URL}/Werdalweladah.pdf`} 
          width="100%" 
          height="500px" 
          style={{ border: 'none', maxWidth: '100%' }} 
          title="Werdalweladah PDF"
        />
      </div>

      {/* Download Button */}
      <a href={`${process.env.PUBLIC_URL}/Werdalweladah.pdf`} download="Werdalweladah.pdf">
        <button style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}>
          📥 تحميل الكتاب بصيغة PDF
        </button>
      </a>
    </div>
  );
};

export default BookReader;
