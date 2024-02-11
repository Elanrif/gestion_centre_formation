package com.master.s3.gestion_centre_formation_spring.config;

import com.master.s3.gestion_centre_formation_spring.services.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {
    @Autowired
    PersonServiceImpl userService;

    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider dap=new DaoAuthenticationProvider();
        dap.setUserDetailsService(userService);
        dap.setPasswordEncoder(encoder());
        return dap;
    }

    /*OrRequestMatcher pour combiner plusieurs AntPathRequestMatcher
    * ce dernier prends au max 2 String.
    * */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests(auth->
                        auth.requestMatchers("/admin/**").permitAll()
                                .requestMatchers( "/utilisateurs/**").permitAll()
                                .requestMatchers( "/formations/**").permitAll()
                                .requestMatchers("/persons/**").permitAll()
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                new AntPathRequestMatcher("/persons").matches(request)
                                ).permitAll()
                                .requestMatchers("/persons").hasAnyRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/entreprises/**").permitAll()
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                              new OrRequestMatcher(
                                                        new AntPathRequestMatcher("/categories","/utilisateurs"),
                                                        new AntPathRequestMatcher("/villes")
                                                ).matches(request)
                                ).permitAll()
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/formations").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/entreprises").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                                .requestMatchers(request ->
                                        request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/admin").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                              .anyRequest().permitAll()
                ).formLogin(withDefaults()).httpBasic(withDefaults());
        return http.build();
    }
}

/*       @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests(auth->
                        auth.requestMatchers("/admin/**").permitAll()
                                .requestMatchers( "/utilisateurs/**").permitAll()
                                .requestMatchers( "/formations/**").permitAll()
                                .requestMatchers("/persons/**").permitAll()
                                .requestMatchers("/persons").permitAll()
                                .requestMatchers(HttpMethod.GET, "/entreprises/**").permitAll()
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/formations").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                                .requestMatchers(request ->
                                        request.getMethod().equals("POST") ||
                                                request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/entreprises").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                                .requestMatchers(request ->
                                        request.getMethod().equals("DELETE") ||
                                                request.getMethod().equals("PUT") ||
                                                new AntPathRequestMatcher("/admin").matches(request)
                                ).hasAnyRole("ADMIN","ASSISTANT")
                              .anyRequest().permitAll()
                ).formLogin(withDefaults()).httpBasic(withDefaults());
        return http.build();
    }    */