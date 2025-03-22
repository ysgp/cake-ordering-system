// script.js
import { db } from './services/firebase-config.js';

// 從 Firestore 讀取訂單並顯示在列表中
db.collection('Orders').get().then((snapshot) => {
    const orderList = document.getElementById('order-list');
    snapshot.forEach((doc) => {
        const order = doc.data();
        const orderItem = document.createElement('div');
        orderItem.innerHTML = `
            <h3>訂單編號：${doc.id}</h3>
            <p>客戶名稱：${order.CustomerName}</p>
            <p>取貨時間：${order.PickupTime}</p>
            <p>訂單狀態：${order.OrderStatus}</p>
        `;
        orderList.appendChild(orderItem);
    });
});