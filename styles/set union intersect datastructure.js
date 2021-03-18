class Group {

    constructor() {
        this.group  = [];
    }
    add(ele) {
        if (!(this.group.includes(ele))){
            this.group.push(ele);
        }
    }
    delete(ele){
        this.group[this.group.indexOf(ele)] = null;
    }

    has(ele){
        return this.group.includes(ele);
    }

    static union(A, B){
        let unionSet = new Group();
        A.group.forEach(ele => {
            unionSet.add(ele);
        })
        B.group.forEach(ele => {
            unionSet.add(ele);
        })
        return unionSet;
    }

    static intersect(A, B){
        let intersectSet = new Group();
        if (A.group.length > B.group.length){
            A.group.forEach(ele => {
                if (A.has(ele) && B.has(ele)){
                    intersectSet.add(ele);
                }
            })
        }
        else {
            B.group.forEach(ele => {
                if (A.has(ele) && B.has(ele)){
                    intersectSet.add(ele);
                }
            })
        }
        return intersectSet;
    }
    static from(iter){
        let outGroup = new Group();
        iter.forEach(n => outGroup.add(n))
        return outGroup;
    }

}

/*
Create set, add elements, delete element, check if set contains element
 */
let group = Group.from([10,20]);
console.log(group.has(10));
//-> true
console.log(group.has(30));
//-> false
group.add(10);
group.delete(10);
console.log(group.has(10));
//-> false

/*
Union and Intersection
 */
let A = Group.from([1,5,8,3,5,6,9]);
let B = Group.from([2,4,6,8,10,1]);
console.log("A = " + A.group);
console.log("B = " + B.group);

let C = Group.union(A, B);
console.log("A union B = " + C.group);
C = Group.intersect(A,B);
console.log("A intersected B = " + C.group);
