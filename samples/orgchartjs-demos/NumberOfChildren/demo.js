
window.onload = function () {
    var nodes = [
        { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
        { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 3, pid: 1, name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 5, pid: 2, name: "Elliot Ross", title: "QA", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 6, pid: 2, name: "Anahi Gordon", title: "QA", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 7, pid: 2, name: "Knox Macias", title: "QA", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 8, pid: 3, name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 9, pid: 3, name: "Sage Barnett", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: 10, pid: 8, name: "Alice Gray", title: "Programmer", img: "https://cdn.balkan.app/shared/10.jpg" },
        { id: 11, pid: 8, name: "Anne Ewing", title: "Programmer", img: "https://cdn.balkan.app/shared/11.jpg" },
        { id: 12, pid: 9, name: "Reuben Mcleod", title: "Programmer", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 13, pid: 9, name: "Ariel Wiley", title: "Programmer", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 14, pid: 4, name: "Lucas West", title: "Marketer", img: "https://cdn.balkan.app/shared/14.jpg" },
        { id: 15, pid: 4, name: "Adan Travis", title: "Designer", img: "https://cdn.balkan.app/shared/15.jpg" },
        { id: 16, pid: 4, name: "Alex Snider", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" }
    ];


    for (var i = 0; i < nodes.length; i++) {
        nodes[i].field_number_children = childCount(nodes[i].id);
    }

    function childCount(id) {
        let count = 0;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].pid == id) {
                count++;
                count += childCount(nodes[i].id);
            }
        }

        return count;
    }

    OrgChart.templates.rony.field_number_children = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "rony",
        collapse: {
            level: 3
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            field_number_children: "field_number_children"
        },
        nodes: nodes
    });
};