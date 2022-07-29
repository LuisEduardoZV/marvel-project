export const stilyzeString = (str) => {
    return str.replace(/\s+/g, '').replace(/[&/\\#,$~%.'":*?<>{}]/g, '');
}