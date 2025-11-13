//dengan fungsi `judul(teks)` untuk mengubah teks menjadi Title Case
export function judul(teks) {
    return teks.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
