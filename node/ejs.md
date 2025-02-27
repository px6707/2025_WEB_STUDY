## ejs

ejs 模版引擎

### 语法
1. <%= params %> 显示变量
2. 列表显示
    ```ejs
    <% array.forEach(item=>{ %>
        <li><%= item %></li>
    <% }) %>

    <% for(let i = 0; i < users.length; i++) { %>
        <li><%= users[i].name %></li>
    <% } %>
    ```
3. 条件渲染
    ```ejs
    <% if(isLogin){ %>
        登录了
    <% } else { %>
        未登录
    <% } %>
    ```
4. 非转译输出 非转义输出（可以输出HTML）
    ```ejs
    <%- 不转译 %>
    ```
5. 包含其他模版, 使用- ，因为要输出未转译的HTML
    ···ejs
    <%- include('./header', {data:someData}) %>
    ···
6. 注释
    ```ejs
        <%# 这是注释 %>
    ```
7. 执行js
    <% var name = 'John'; %>
    <%= name %>