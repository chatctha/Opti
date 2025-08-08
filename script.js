document.addEventListener('DOMContentLoaded', () => {
    // อัตราแลกเปลี่ยน (สามารถปรับเปลี่ยนได้)
    const CNY_TO_THB_RATE = 5.15;

    // ดึง Element ที่ต้องใช้จากหน้า HTML
    const cnyInput = document.getElementById('cny-input');
    const convertBtn = document.getElementById('convert-btn');
    const resultText = document.getElementById('result-text');

    // ฟังก์ชันสำหรับคำนวณและแสดงผล
    function convertCurrency() {
        const cnyValue = parseFloat(cnyInput.value);

        // ตรวจสอบว่าค่าที่รับมาเป็นตัวเลขและมากกว่า 0 หรือไม่
        if (isNaN(cnyValue) || cnyValue < 0) {
            resultText.textContent = 'กรุณากรอกจำนวนเงินที่ถูกต้อง';
            resultText.style.color = '#dc3545'; // เปลี่ยนสีข้อความเป็นสีแดงเพื่อแจ้งเตือน
            return;
        }

        // คำนวณค่าเงินบาท
        const thbValue = cnyValue * CNY_TO_THB_RATE;

        // แสดงผลลัพธ์ โดยปัดเศษเป็นทศนิยม 2 ตำแหน่ง
        resultText.textContent = `ผลลัพธ์: ${thbValue.toFixed(2)} บาท`;
        resultText.style.color = '#28a745'; // เปลี่ยนสีข้อความกลับเป็นสีเขียว
    }

    // สั่งให้ปุ่มทำงานเมื่อถูกคลิก
    convertBtn.addEventListener('click', convertCurrency);

    // เพิ่มความสะดวกให้ผู้ใช้ โดยให้กด Enter ที่ช่อง input แล้วคำนวณเลย
    cnyInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            convertCurrency();
        }
    });
});
