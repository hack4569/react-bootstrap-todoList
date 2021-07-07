package study.datastructure;

public class MyLinkedList<T>{

    public Node<T> head;
    public int size;
    //inner class
    private static class Node<T> {
    public T data;
    public Node<T> next;
        public Node(T data) {
        this.data = data;
        this.next = null;
        }
    }
    public MyLinkedList(){
        head=null;
        size=0;
    }
    private void addFirst(T data) {
        //노드생성
        Node<T> tmp = new Node<>(data);
        if(head==null) {
            head = tmp;
        }else {
            //다음 next 객체설정
            tmp.next = head;
            //헤드 next 객체설정
            head = tmp;
        }
        size++;
    }
    private void addAfter(Node<T> before, T data) {
        Node<T> tmp = new Node<>(data);
        tmp.next = before.next;
        before.next = tmp;
        size++;
    }
    public int indexOf(T data) {
        Node<T> p = head;
        int index =0;
        while(p!=null) {
            if(p.data.equals(data)) {
                return index;
            }
            p=p.next;
            index++;
        }
        // while(!p.data.equals(node)) {
        // p=p.next;
        // index++;
        // }
        // if(p.data.equals(node)) {
        // return index;
        // }
        return -1;
    }
    public Node<T> getNode(int pIndex){
        if(pIndex<0 || pIndex>=size) {
            return null;
        }
        Node<T> p = head;
        int idx = 0;
        while(idx!=pIndex){
            p = p.next;
            idx++;
        }
        return p;
    }
    //addAfter, getNode를 만든 후 add를 만든다.
    public void add(int index, T data) {
        if(index<0 || index>=size) {
            return;
        }
        if(index==0) {
            this.addFirst(data);
        }else {
            Node<T> before = this.getNode(index-1);
            this.addAfter(before, data);
        }
    }
    // public T remove(int index) {
    // if(index<0 || index>=size) {
    // return null;
    // }
    // Node<T> p = head;
    // Node<T> q = null;
    // int idx = 0;
    // while(p!=null) {
    // if(idx==index) {
    // if(q==null) {
    // return p.data;
    // }
    // q.next = p.next;
    // p=null;
    // return p.data;
    // }
    // q = p;
    // p = p.next;
    // index++;
    // }
    // return null;
    // }
    public T remove(int index) {
        if(index<0 || index>=size) {
            return null;
        }
        if(index==0) {
            return removeFirst();
        }
        Node<T> prev = getNode(index-1);
        prev.next = getNode(index+1);
        if(prev.next==null) {
            return null;
        }
        return prev.next.data;
    }
    private T removeFirst() {
        if(head==null) {
            return null;
        }
        Node<T> temp = head;
        head = head.next;
        size--;
        return temp.data;
    }
    public static void main(String[] args) {
        MyLinkedList<String> list = new MyLinkedList<>();
        list.addFirst("banana");
        list.add(0, "apple");
        list.remove(0);
        System.out.print(list);
    }
}