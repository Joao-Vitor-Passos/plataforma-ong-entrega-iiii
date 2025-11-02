const KEY = 'ong_submissions_v1';

export function initStorage() {
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, JSON.stringify([]));
  }
}

export function saveSubmission(obj) {
  const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
  arr.unshift(obj);
  localStorage.setItem(KEY, JSON.stringify(arr));
}

export function getSubmissions() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}
