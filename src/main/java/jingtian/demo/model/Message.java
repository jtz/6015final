package jingtian.demo.model;

import org.springframework.data.annotation.Id;

public class Message {

    public Message() {
    }

    public Message(String name, String gender, String email, String phone, String contact, String showmsg, String msg) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.contact = contact;
        this.showmsg = showmsg;
        this.msg = msg;
    }

    @Id
    private Long id;

    private String name;
    private String gender;
    private String email;
    private String phone;
    private String contact;
    private String showmsg;
    private String msg;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getShowmsg() {
        return showmsg;
    }

    public void setShowmsg(String showmsg) {
        this.showmsg = showmsg;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}