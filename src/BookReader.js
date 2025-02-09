import React from 'react';

const BookReader = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <h1>📖 قراءة الكتاب: ورد الولادة</h1>
      <h3>✍️ تأليف: نوره بنت عبدالرحمن (أم عبدالله)</h3>
      <embed src={`${process.env.PUBLIC_URL}/Werdalweladah.pdf`} width="80%" height="600px" type="application/pdf" />
      <br />
      <a href={`${process.env.PUBLIC_URL}/Werdalweladah.pdf`} download="Werdalweladah.pdf">
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          📥 تحميل الكتاب بصيغة PDF
        </button>
      </a>
    </div>
  );
};

export default BookReader;
