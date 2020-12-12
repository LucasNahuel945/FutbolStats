const libertadores = {
    "get":"fixtures/rounds",
    "parameters":{
        "league":"13",
        "season":"2020"
    },
    "errors":[],
    "results":11,
    "paging":{
        "current":1,
        "total":1
    },
    "response":[
        "1st Round",
        "2nd Round",
        "3rd Round",
        "Group Stage - 1",
        "Group Stage - 2",
        "Group Stage - 3",
        "Group Stage - 4",
        "Group Stage - 5",
        "Group Stage - 6",
        "8th Finals",
        "Quarter-finals"
    ]
};

const champions = {
    "get":"fixtures/rounds",
    "parameters":{
        "league":"2",
        "season":"2020"
    },
    "errors":[],
    "results":12,
    "paging":{
        "current":1,
        "total":1
    },
    "response":[
        "Preliminary round 1",
        "Preliminary round 2",
        "1st Qualifying Round",
        "2nd Qualifying Round",
        "3rd Qualifying Round",
        "Play-offs",
        "Group Stage - 1",
        "Group Stage - 2",
        "Group Stage - 3",
        "Group Stage - 4",
        "Group Stage - 5",
        "Group Stage - 6"
    ]
};

const rounds = {
    'libertadores': libertadores.response,
    'champions': champions.response
}

export default rounds;
