const el = document.getElementById('table');
const html = '<tr><td>1</td><td>BTC/INR</td><td>2,587,560</td><td>₹ 30,94,698 / ₹ 29,94,897</td><td>286.1729</td><td>btc</td></tr>'

const init = async () => {
    const res = await axios.get('http://127.0.0.1:3000');

    res.data.data.forEach((cur, i) => {

        el.insertAdjacentHTML('beforeend', `<tr><td>${i+1}</td><td>${cur.name}</td><td>₹ ${cur.last}</td><td>₹ ${cur.buy} / ₹ ${cur.sell}</td><td>${cur.volume}</td><td>${cur.base_unit}</td></tr>`)
    })
}

init();