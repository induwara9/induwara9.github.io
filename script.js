// ══════════ NAV TOGGLE ══════════
function toggleNav() {
    document.getElementById('ham').classList.toggle('open');
    document.getElementById('drawer').classList.toggle('open');
}
document.addEventListener('click', e => {
    const ham = document.getElementById('ham');
    const drawer = document.getElementById('drawer');
    if (!e.target.closest('.topbar') && !e.target.closest('.nav-drawer')) {
        ham.classList.remove('open');
        drawer.classList.remove('open');
    }
});

// ══════════ TABLE HINT ══════════
function checkTableHint() {
    const hint = document.getElementById('tableHint');
    if (hint) hint.style.display = window.innerWidth <= 799 ? 'block' : 'none';
}
checkTableHint();
window.addEventListener('resize', checkTableHint);
