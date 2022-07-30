export default function notExistSample() {
    let name = null
    console.log('notExist sample 1:', typeof name, name)

    name = 'かっつん'
    if (name === null) {
        console.log('notExist sample 2:', 'nameはnullだよ')
    } else {
        console.log('notExist sample 3:', 'nameはnullじゃないよ')
    }

    let age = undefined
    console.log('notExist sample 4:', typeof age, age)

    age = 28;
    if (age === undefined) {
        console.log('notExist sample 5:', 'ageはundefinedだよ')
    } else {
        console.log('notExist sample 6:', 'ageはundefinedじゃないよ')
    }
}