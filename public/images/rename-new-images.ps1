# PowerShell重命名脚本
# 先备份现有数字命名的文件（将它们重命名为bak-1.png等）
Get-ChildItem -Path . -Filter "[0-9]*.png" | ForEach-Object {
    $bakFile = "bak-" + $_.Name
    Write-Host "Backing up: $($_.Name) -> $bakFile"
    Rename-Item -Path $_.FullName -NewName $bakFile -Force
}

# 获取所有PNG文件（包括备份的和未命名的），按文件大小排序
$files = Get-ChildItem -Path . -Filter "*.png" | Sort-Object Length
$i = 1

Write-Host "Found $($files.Count) files to rename."

foreach ($file in $files) {
    # 跳过已经是bak-开头的文件
    if ($file.Name -match '^bak-') {
        Write-Host "Skipping backup file: $($file.Name)"
        continue
    }
    
    $newName = "$i.png"
    Write-Host "Renaming: $($file.Name) -> $newName"
    
    # 如果目标文件名是备份文件的原始名称，使用备份文件
    $bakFile = "bak-$newName"
    if (Test-Path $bakFile) {
        # 删除当前的目标文件名（如果存在）
        if (Test-Path $newName) {
            Remove-Item $newName -Force
        }
        
        # 将备份文件恢复为原始文件名
        Write-Host "Restoring backup: $bakFile -> $newName"
        Rename-Item -Path $bakFile -NewName $newName -Force
    }
    else {
        # 如果没有对应的备份文件，直接重命名当前文件
        Rename-Item -Path $file.FullName -NewName $newName -Force
    }
    
    $i++
}

# 删除所有剩余的备份文件
Get-ChildItem -Path . -Filter "bak-*.png" | ForEach-Object {
    Write-Host "Removing backup file: $($_.Name)"
    Remove-Item $_.FullName -Force
}

Write-Host "Done! Renamed $($files.Count) files." 