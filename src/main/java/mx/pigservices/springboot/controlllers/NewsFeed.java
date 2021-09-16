package mx.pigservices.springboot;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsFeed {
    @GetMapping("/noticias-feed")
    public String noticiasFeed() {
        return this.getNewsFeed();
    }
    @GetMapping("/noticias-salvar")
    public String noticiasSalvar()
    {
        return "salvando la noticia";
    }

private String getNewsFeed() {
    String newsFeed = "";
    newsFeed += "{";
    newsFeed += "\"noticias\":[";
    newsFeed += "{";
    newsFeed += "\"noticia\":1,";
    newsFeed += "\"titulo\":\"noticia 1\",";
    newsFeed += "\"status\":\"a\",";
    newsFeed += "\"clasificacion\":\"0\",";
    newsFeed += "\"fecha\":\"2021-09-16\",";
    newsFeed += "\"texto\":\"IPSUM LOREM IPSUM LOREM EST\"";
    newsFeed += "}    ,";
    newsFeed += "{";
    newsFeed += "    \"noticia\":2,";
    newsFeed += "\"titulo\":\"noticia 2\",";
    newsFeed += "    \"status\":\"a\",";
    newsFeed += "    \"clasificacion\":\"1\",";
    newsFeed += "    \"fecha\":\"2021-09-16\",";
    newsFeed += "    \"texto\":\"IPSUM LOREM IPSUM LOREM EST\"";
    newsFeed += "        }";
    newsFeed += "    ]";
    newsFeed += "}";
    return newsFeed;
}
}