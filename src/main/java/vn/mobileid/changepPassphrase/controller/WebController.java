/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.mobileid.changepPassphrase.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Ngọc Triệu
 */
@Controller
@RequestMapping("/")
public class WebController {
    @GetMapping(value = {"/{path:[^\\.]*}", "/{path:^(?!api).*$}/**/{path:[^\\.]*}"})
    public String getIndex() {
        return "/index.html"; 
    }
}
