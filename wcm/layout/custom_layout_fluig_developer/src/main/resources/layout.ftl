<#import "/wcm.ftl" as wcm/>

<@wcm.header authenticated="true"/>

<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">


    <!-- Wrapper -->
    <div class="container-custom">
        <div id="wcm-content" class="clearfix wcm-background">

            <!-- Onde deverá estar a barra de formatação -->
            <#if pageRender.isEditMode()=true>
            <div name="formatBar" id="formatBar"></div>
            <!-- Div geral -->
            <!-- Há CSS distinto para Edição/Visualização -->
            <div id="edicaoPagina" class="clearfix">
            <#else>
            <div id="visualizacaoPagina" class="clearfix">
            </#if>  

                <!-- Titulo da página -->
                <div class="slotfull layout-1-1">
                    <span class="titleArea">${i18n.getTranslation('wcm.layoutdefaultpublic.title')}</span>
                    <h2 class="pageTitle">${pageTitle}</h2>
                </div>
    
                <!-- Slot 1 -->
                <div class="editable-slot slotfull layout-1-1" id="slotFull1">
                    <@wcm.renderSlot id="SlotC" editableSlot="true"/>
                </div>
    
                <!-- Slot 2 -->
                <div class="editable-slot slotfull layout-1-1" id="slotFull2">
                    <@wcm.renderSlot id="SlotB" editableSlot="true"/>
                </div>
    
                <!-- Slot 3 -->
                <div class="editable-slot slotfull layout-1-1" id="slotFull3">
                    <@wcm.renderSlot id="SlotA" editableSlot="true"/>
                </div>
    
                <!-- Slot 4 -->
                <div class="editable-slot slotfull layout-1-2left" id="slotFull4">
                    <@wcm.renderSlot id="SlotD" editableSlot="true"/>
                </div>
    
                <!-- Slot 5 -->
                <div class="editable-slot slotfull layout-1-2right" id="slotFull5">
                    <@wcm.renderSlot id="SlotE" editableSlot="true"/>
                </div>
        </div>
    </div>
</div>
