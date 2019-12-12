import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
        {
            id: 1,
            title: "Metal Gear Solid V: The Phantom Pain",
            link: "https://store.steampowered.com/app/287700/METAL_GEAR_SOLID_V_THE_PHANTOM_PAIN/",
            author: "Konami, Kojima Productions",
            comments: [],
            upvotes: 10
        },
        {
            id: 2,
            title: "Forza Motorsport 7",
            link: "https://www.xbox.com/en-IE/games/forza-7",
            author: "Turn 10",
            comments: [],
            upvotes: 14
        },
        {
            id: 3,
            title:
            "Borderlands 2",
            link: "https://www.2k.com/en-US/game/borderlands-2/",
            author: "2K",
            comments: [],
            upvotes: 12
        },
        {
            id: 4,
            title:
            "Call of Duty Modern Warfare 2",
            link: "https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_2",
            author: "Infinity Ward",
            comments: [],
            upvotes: 10
        },
        {
            id: 5,
            title: "Mario Kart 8",
            link:
            "https://www.nintendo.com/games/detail/mario-kart-8-deluxe-switch/",
            author: "Nintendo",
            comments: [],
            upvotes: 8
        },
        {
            id: 6,
            title: "Hellblade: Senua's Sacrifice",
            link: "https://store.steampowered.com/app/414340/Hellblade_Senuas_Sacrifice/",
            author: "Ninja Theory",
            comments: [],
            upvotes: 10
        },
        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
        id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
        id,
        title,
        author,
        link,
        comments: [],
        upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
        this.posts[index].upvotes += 1;
        return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
        id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
        post.comments[index].upvotes += 1;
        }
    }

    removePost(id){
        let elements = _.remove(this.posts, post => post.id === id);
        return elements;
    }
}

export default new StubAPI();