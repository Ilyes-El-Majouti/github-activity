const json = require("jsonfile")
const moment = require("moment")
const git = require("simple-git")
const random = require("random")
const FILE_PATH = "./data.json"

const commit = (n) => {
    if(n===0) return git().push();
    const x = random.int(0, 54)
    const y = random.int(0, 6)
    const DATE = moment().subtract(1, "y")
        .add(1, "d")
        .add(x, "w")
        .add(y, "d")
        .format()

    const data = {
        date: DATE
    }

    console.log(DATE);
    json.writeFile(FILE_PATH, data, () => {
        git().add(FILE_PATH).commit(DATE, {'--date': DATE },
        commit.bind(this, --n))
    })
}

commit(1000)