from os.path import dirname, join, realpath


from demo import views
from demo.sql_injection import sql_api
from demo.exec_code import exec_api
from demo.exec_command import cmd_api


DIR_PATH = dirname(realpath(__file__))


def setup_routes(app):
    # app.add_url_rule('/', 'index', views.index_get_r)
    app.add_url_rule("/demo/get_open", view_func=views.index_get_r, methods=["GET"])
    app.add_url_rule("/demo/post_open", view_func=views.index_post_r, methods=["POST"])
    # PostgreSQL
    app.add_url_rule("/demo/postgresql_post_excute", view_func=sql_api.pysql_post_excute, methods=["POST"])
    app.add_url_rule("/demo/postgresql_post_many", view_func=sql_api.pysql_post_many, methods=["POST"])
    # mysql
    app.add_url_rule("/demo/mysql_post_exec", view_func=sql_api.mysql_post_e, methods=["POST"])
    app.add_url_rule("/demo/mysql_post_many", view_func=sql_api.mysql_post_many, methods=["POST"])
    # sqlite
    app.add_url_rule("/demo/sqlite3_post", view_func=sql_api.sql_post_r, methods=["POST"])
    app.add_url_rule("/demo/sqlite3_post_executemany_sql", view_func=sql_api.sql_post_executemany_sql, methods=["POST"])
    app.add_url_rule("/demo/sqlite3_post_executescript", view_func=sql_api.sql_post_executescript, methods=["POST"])
    # 增加 命令执行
    app.add_url_rule("/demo/exec_post_e", view_func=cmd_api.exec_post_e, methods=["POST"])
    app.add_url_rule("/demo/exec_post_popen", view_func=cmd_api.exec_post_popen, methods=["POST"])

    app.add_url_rule("/demo/exec_post_subprocess", view_func=cmd_api.exec_post_subprocess, methods=["POST"])
    app.add_url_rule("/demo/cmd_exec", view_func=cmd_api.cmd_exec, methods=["POST"])

    # code exec
    app.add_url_rule("/demo/eval_post_e", view_func=exec_api.eval_post_e, methods=["POST"])
    app.add_url_rule("/demo/yaml_post_e", view_func=exec_api.yaml_post_e, methods=["POST"])


