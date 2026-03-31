window.onload = function() {
    const kings = [
        { id: 1, name: "พ่อขุนศรีอินทราทิตย์", period: "พ.ศ. 1792 - ไม่ปรากฏปีแน่ชัด" },
        { id: 2, name: "พ่อขุนบานเมือง", period: "ไม่ปรากฏปีแน่ชัด - พ.ศ. 1822" },
        { id: 3, name: "พ่อขุนรามคำแหงมหาราช", period: "พ.ศ. 1822 - 1841" },
        { id: 4, name: "พระยาเลอไทย", period: "พ.ศ. 1841 - 1866" },
        { id: 5, name: "พระยางัวนำถุม", period: "พ.ศ. 1866 - 1890" },
        { id: 6, name: "พระมหาธรรมราชาที่ 1 (พญาลิไท)", period: "พ.ศ. 1890 - 1911" },
        { id: 7, name: "พระมหาธรรมราชาที่ 2", period: "พ.ศ. 1911 - 1942" },
        { id: 8, name: "พระมหาธรรมราชาที่ 3 (พญาไสลือไท)", period: "พ.ศ. 1942 - 1962" },
        { id: 9, name: "พระมหาธรรมราชาที่ 4 (บรมปาล)", period: "พ.ศ. 1962 - 1981" }
    ];

    const listContainer = document.getElementById('king-list');
    const detailsContainer = document.getElementById('details');

    if (listContainer) {
        kings.forEach(king => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.className = 'king-btn'; 
            btn.innerText = `ลำดับที่ ${king.id}: ${king.name}`;
            
            btn.onclick = () => {
                // เปลี่ยนจากการโชว์ข้อความ เป็นการลิงก์ไปยังหน้าประวัติ (ถ้ามีไฟล์เตรียมไว้)
                // window.location.href = `history_king_${king.id}.html`;
                detailsContainer.innerHTML = `<h3>${king.name}</h3><p>ครองราชย์: ${king.period}</p>`;
            };

            li.appendChild(btn);
            listContainer.appendChild(li);
        });
    }
};