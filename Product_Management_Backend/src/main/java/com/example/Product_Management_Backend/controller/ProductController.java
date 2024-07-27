package com.example.Product_Management_Backend.controller;

import com.example.Product_Management_Backend.model.Product;
import com.example.Product_Management_Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }

    @PostMapping("/editProduct/{id}")
    public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
        return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
    }
}
