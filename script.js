function submitAnswers() {
    let total = 5, score = 0;

    var q1 = document.forms['quizform']['q1'].value;
    var q2 = document.forms['quizform']['q2'].value;
    var q3 = document.forms['quizform']['q3'].value;
    var q4 = document.forms['quizform']['q4'].value;
    var q5 = document.forms['quizform']['q5'].value;

    for (let i = 1; i <= total; i++) {
        if (eval('q' + i) == '' || eval('q' + i) == null || eval('q' + i) == undefined) {
            alert(`Q${i} is remaining..`)
            return false;
        }
    }

    var ans = ['b', 'a', 'd', 'b', 'd']

    for (let i = 1; i <= total; i++) {
        if (eval('q' + i) == ans[i-1]) {
            score++;
        }
    }

    document.querySelector('.headings h2').style.display = 'block'
    document.getElementById('score').innerText = `\tYou scored ${score} out of ${total}`

    if (score >= 2)
        document.getElementById('pass').innerText = 'Pass';
    else
        document.getElementById('fail').innerText = 'Fail';
}

function refresh() {
    document.querySelector('.headings h2').style.display = 'none'
    document.querySelector('form').reset()
}